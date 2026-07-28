<#!
.SYNOPSIS
    Runs the repeatable, non-destructive LocalMate CRM audit checks.

.DESCRIPTION
    This repository currently contains a Vite landing page only. Runtime checks
    therefore remain BLOCKED until a CRM/API/D1 environment is supplied. The
    script never turns an unavailable dependency into PASS.
#>
[CmdletBinding()]
param(
    [string]$BaseUrl,
    [switch]$SkipBuild,
    [string]$JsonPath
)

$ErrorActionPreference = 'Continue'
$repo = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$results = [System.Collections.Generic.List[object]]::new()

function Add-Result([string]$Id, [string]$Area, [string]$Status, [string]$Command, [string]$Expected, [string]$Actual, [string]$Evidence) {
    $results.Add([pscustomobject]@{ Id=$Id; Area=$Area; Status=$Status; Command=$Command; Expected=$Expected; Actual=$Actual; Evidence=$Evidence })
}

function Has-Text([string]$RelativePath, [string]$Pattern, [string]$Id, [string]$Area, [string]$Description) {
    $path = Join-Path $repo $RelativePath
    if (-not (Test-Path -LiteralPath $path)) {
        Add-Result $Id $Area 'BLOCKED' "Test-Path $RelativePath" $Description 'File is absent' $path
        return
    }
    $match = Select-String -LiteralPath $path -Pattern $Pattern -Quiet
    $status = if ($match) { 'PASS' } else { 'FAIL' }
    $actual = if ($match) { "Pattern found: $Pattern" } else { "Pattern not found: $Pattern" }
    Add-Result $Id $Area $status "Select-String -Path $RelativePath -Pattern '$Pattern'" $Description $actual "$path (source inspection)"
}

if ($SkipBuild) {
    Add-Result 'BLD-01' 'Build' 'NOT TESTED' 'npm run build' 'TypeScript and Vite build exit 0' 'Skipped by -SkipBuild' 'No build evidence collected'
} else {
    Push-Location $repo
    npm run build *> $null
    $exit = $LASTEXITCODE
    Pop-Location
    $status = if ($exit -eq 0) { 'PASS' } else { 'FAIL' }
    Add-Result 'BLD-01' 'Build' $status 'npm run build' 'TypeScript and Vite build exit 0' "Exit code $exit" 'Command executed by this script; see terminal output/CI log'
}

Has-Text 'package.json' '"dev"\s*:\s*"vite' 'UI-STATIC-01' 'UI' 'Vite dev command is declared'
Has-Text 'src\App.tsx' 'register-form' 'VAL-STATIC-01' 'Validation' 'Lead form target exists in application source'
Has-Text 'src\components\layout\Header.tsx' 'onOpenDemoForm' 'ACC-STATIC-01' 'Acceptance' 'Header CTA is wired to the form callback'

$runtimeAreas = @(
    @{ Id='D1-01'; Area='D1'; Path='/api/health'; Expected='D1-backed health endpoint returns HTTP 200 and a healthy payload' },
    @{ Id='API-01'; Area='API'; Path='/api/leads'; Expected='Lead create endpoint accepts a valid lead and returns a persisted identifier' },
    @{ Id='API-02'; Area='API'; Path='/api/leads/does-not-exist'; Expected='Unknown lead returns HTTP 404 without leaking internals' },
    @{ Id='SEC-01'; Area='Security'; Path='/api/admin'; Expected='Unauthenticated admin request is rejected with HTTP 401 or 403' },
    @{ Id='PERM-01'; Area='Permissions'; Path='/api/admin/leads'; Expected='Non-admin cannot read or mutate protected lead data' }
)

foreach ($test in $runtimeAreas) {
    $command = "Invoke-WebRequest -Uri '$($BaseUrl.TrimEnd('/'))$($test.Path)'"
    if ([string]::IsNullOrWhiteSpace($BaseUrl)) {
        Add-Result $test.Id $test.Area 'BLOCKED' $command $test.Expected 'Runtime URL not supplied; repository has no CRM server/D1 binding' 'No runtime available (confirmed by repository inspection)'
        continue
    }
    try {
        $response = Invoke-WebRequest -Uri "$($BaseUrl.TrimEnd('/'))$($test.Path)" -Method Get -SkipHttpErrorCheck -TimeoutSec 10
        $status = if ($response.StatusCode -in 200,401,403,404) { 'NOT TESTED' } else { 'FAIL' }
        Add-Result $test.Id $test.Area $status $command $test.Expected "HTTP $($response.StatusCode); payload semantics require endpoint contract and test data" "Runtime response from $BaseUrl$($test.Path)"
    } catch {
        Add-Result $test.Id $test.Area 'BLOCKED' $command $test.Expected "Request failed: $($_.Exception.Message)" "Runtime request to $BaseUrl$($test.Path)"
    }
}

foreach ($test in @(
    @{ Id='UI-01'; Area='UI'; Expected='At 360, 390, 768, 1024, 1280, and 1440 px, page has no horizontal overflow and CTA is usable' },
    @{ Id='UI-02'; Area='UI'; Expected='FAQ opens/closes with keyboard and correct aria-expanded state' },
    @{ Id='VAL-01'; Area='Validation'; Expected='Empty and malformed lead submissions are rejected with accessible messages' },
    @{ Id='PERSIST-01'; Area='Reload persistence'; Expected='Created lead remains present after reload and is not duplicated' },
    @{ Id='ACC-01'; Area='Acceptance'; Expected='Visitor can submit a valid lead and sees a confirmed outcome' }
)) {
    $capture = 'node .agents/skills/local-ui-tester/scripts/capture-page.cjs <url> <artifact.png> <width> <height> 1000 true'
    $actual = if ([string]::IsNullOrWhiteSpace($BaseUrl)) { 'Runtime URL not supplied; browser interaction cannot run' } else { 'Not executed: Playwright scenario runner is not installed in package.json' }
    $evidence = if ([string]::IsNullOrWhiteSpace($BaseUrl)) { 'No runtime available' } else { 'Requires Playwright/browser fixture and CRM API contract' }
    Add-Result $test.Id $test.Area 'BLOCKED' $capture $test.Expected $actual $evidence
}

if ($JsonPath) { $results | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $JsonPath -Encoding utf8 }
$results | Format-Table Id,Area,Status,Actual -AutoSize
Write-Output "Summary: PASS=$(@($results | Where-Object Status -eq 'PASS').Count) FAIL=$(@($results | Where-Object Status -eq 'FAIL').Count) BLOCKED=$(@($results | Where-Object Status -eq 'BLOCKED').Count) NOT_TESTED=$(@($results | Where-Object Status -eq 'NOT TESTED').Count)"
