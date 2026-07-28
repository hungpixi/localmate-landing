interface AssetBinding {
  fetch(request: Request): Promise<Response>;
}

interface DeploymentEnv {
  ASSETS: AssetBinding;
}

export default {
  async fetch(request: Request, env: DeploymentEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/')) {
      return new Response('API not configured', { status: 501 });
    }

    return env.ASSETS.fetch(request);
  }
};
