import {
  ok,
  notFound,
  internalPeerError,
  type InterWindowRequestWithId,
  type RequestHandler,
} from '@/interWindow';

(() => {
  const acceptableOrigins = [
    window.location.origin,
    'http://localhost:3000',
    'http://localhost:12345',
    'https://rabbit.syusui.net',
  ];

  const rawMessageHandler = (handler: RequestHandler) => (event: MessageEvent) => {
    console.log('transfer-config: received request', event.data, event.origin);
    if (!acceptableOrigins.includes(event.origin)) return;

    const { origin, source } = event;
    if (typeof event.data !== 'string') return;
    const request = JSON.parse(event.data) as InterWindowRequestWithId;

    let responseObj;
    try {
      responseObj = handler(request);
    } catch (e) {
      responseObj = internalPeerError(undefined);
    }

    const response = JSON.stringify({ requestId: request.requestId, ...responseObj });
    // @ts-expect-error postMessage
    source?.postMessage(response, origin);
  };

  window.addEventListener(
    'message',
    rawMessageHandler((request) => {
      switch (request.type) {
        case 'GET_CONFIG': {
          const value = window.localStorage.getItem('RabbitConfig') ?? '';
          return ok(value);
        }
        default:
          return notFound();
      }
    }),
    false,
  );

  console.log('transfer-config: mounted');
})();
