import type { RequestContext } from './types';

export class HttpError extends Error {
  constructor(public readonly status: number, message: string, public readonly details?: unknown) {
    super(message);
    this.name = 'HttpError';
  }
}

export const json = (data: unknown, status = 200, requestId?: string): Response =>
  Response.json(data, {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...(requestId ? { 'x-request-id': requestId } : {})
    }
  });

export const errorResponse = (error: unknown, requestId: string): Response => {
  const known = error instanceof HttpError;
  return json(
    {
      error: {
        code: known ? errorCode(error.status) : 'INTERNAL_ERROR',
        message: known ? error.message : 'An unexpected error occurred.',
        ...(known && error.details !== undefined ? { details: error.details } : {})
      }
    },
    known ? error.status : 500,
    requestId
  );
};

const errorCode = (status: number): string => ({
  400: 'VALIDATION_ERROR', 401: 'UNAUTHENTICATED', 403: 'FORBIDDEN',
  404: 'NOT_FOUND', 409: 'CONFLICT', 422: 'VALIDATION_ERROR'
}[status] ?? 'REQUEST_ERROR');

export const withCors = (response: Response, origin: string | null, allowed: string): Response => {
  const headers = new Headers(response.headers);
  if (origin && (allowed === '*' || allowed.split(',').map(value => value.trim()).includes(origin))) {
    headers.set('access-control-allow-origin', origin);
    headers.set('vary', 'Origin');
  }
  headers.set('access-control-allow-headers', 'Authorization, Content-Type, X-Request-Id');
  headers.set('access-control-allow-methods', 'GET, POST, PATCH, OPTIONS');
  return new Response(response.body, { status: response.status, headers });
};

export const contextFrom = (request: Request): RequestContext => ({
  requestId: request.headers.get('x-request-id')?.slice(0, 100) || crypto.randomUUID(),
  user: { subject: 'crm-api-token' }, organizationId: ''
});
