---
name: google-sheets-lead-sync
description: Hướng dẫn tích hợp Google Apps Script Web App để nhận dữ liệu lead từ Landing Page tự động ghi vào Google Sheets (20 cột chuẩn) và gửi thông báo Telegram.
---

# Google Sheets Lead Sync Skill (LocalMate)

## 1. Google Apps Script Web App Source Code (`doPost(e)`)
```javascript
function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(10000); // Khóa chống ghi đè đồng thời

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Khởi tạo hàng tiêu đề 20 cột chuẩn nếu trang trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Created At", "Lead ID", "Full Name", "Phone", "Business Name", 
        "City / Country", "Business Category", "Priority Goal", "Package Interest", 
        "Status", "Source", "UTM Source", "UTM Medium", "UTM Campaign", 
        "Referrer", "IP", "User Agent", "Note", "Telegram Notified", "Sheet Synced"
      ]);
    }

    var data = JSON.parse(e.postData.contents);
    var createdAtFormatted = data.createdAt 
      ? Utilities.formatDate(new Date(data.createdAt), "GMT+7", "dd/MM/yyyy HH:mm:ss")
      : Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

    var rowData = [
      createdAtFormatted,
      data.id || "",
      data.fullName || "",
      data.phone || "",
      data.businessName || "",
      data.cityCountry || "",
      data.businessCategory || "",
      data.priorityGoal || "",
      data.packageInterest || "",
      data.status || "new",
      data.source || "landing_page",
      data.utmSource || "",
      data.utmMedium || "",
      data.utmCampaign || "",
      data.referrer || "",
      data.ipAddress || "",
      data.userAgent || "",
      data.note || "",
      data.telegramNotified ? "TRUE" : "FALSE",
      "TRUE"
    ];

    sheet.appendRow(rowData);
    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({
      ok: true,
      message: "Lead synced successfully to Google Sheet"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      ok: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Web App Exec Endpoints
- **Live Google Apps Script Web App URL:**
  `https://script.google.com/macros/s/AKfycbxH5cdJvXwsQZ0wvIfY5SW1MU_JwYdPQz0izBPiOezapBIZnlu1WmwEXTItIA1mKnwg/exec`

## 3. Cách gọi Webhook từ Frontend React / JavaScript
Lưu ý dùng `mode: 'no-cors'` khi gọi từ trình duyệt tới Apps Script Web App:
```typescript
fetch('https://script.google.com/macros/s/AKfycbxH5cdJvXwsQZ0wvIfY5SW1MU_JwYdPQz0izBPiOezapBIZnlu1WmwEXTItIA1mKnwg/exec', {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(leadPayload)
});
```
