export type InterWindowRequest = {
  type: 'GET_CONFIG';
};

export type InterWindowRequestWithId = InterWindowRequest & {
  requestId: number;
};

export type InterWindowResponse = {
  type: 'OK' | 'BAD_REQUEST' | 'NOT_FOUND' | 'INTERNAL_PEER_ERROR';
  payload?: string;
};

export type InterWindowResponseWithId = InterWindowResponse & {
  requestId: number;
};

export type RequestHandler = (request: InterWindowRequestWithId) => InterWindowResponse;

export const ok = (payload?: string): InterWindowResponse => ({
  type: 'OK',
  payload,
});

export const badRequest = (payload?: string): InterWindowResponse => ({
  type: 'BAD_REQUEST',
  payload,
});

export const notFound = (payload?: string): InterWindowResponse => ({
  type: 'NOT_FOUND',
  payload,
});

export const internalPeerError = (payload?: string): InterWindowResponse => ({
  type: 'INTERNAL_PEER_ERROR',
  payload,
});
