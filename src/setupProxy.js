const { createProxyMiddleware } = require("http-proxy-middleware");
const helmet = require("helmet");
const TIMEOUT = 30*60*1000;
module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://IRNet-backend:9900',
      // target: 'http://ai-django-backend-tri:8000',
      //target: 'http://ai-django-backend:9001',
      //target: 'http://ai-django-backend-manish:9012',
      secure: false,
      changeOrigin: true,
      proxyTimeout: TIMEOUT,
      timeout: TIMEOUT,
      onError: (err, req, res) => console.log(err)
    })
  );
  
  // Response header
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
  // app.use(
  //   helmet.contentSecurityPolicy({
  //     useDefaults: false,
  //     directives: {
  //       "default-src": ["'self'", "https://*", "http://*", "ws://*"], // Allow WebSocket connections
  //       "script-src": ["'self'", "https://*", "http://*", "'unsafe-inline'"], // Consider removing 'unsafe-inline' if possible
  //       "style-src": ["'self'", "https://*", "http://*", "'unsafe-inline'"], // Consider removing 'unsafe-inline' if possible
  //       // "img-src": ["'self'", "https://*", "http://*", "data:"], // Allow data URIs for images
  //       "connect-src": ["'self'", "https://*", "http://*", "ws://127.0.0.1/ws"], // Specifically allowing WebSocket connection
  //       "frame-ancestors": ["'self'", "https://*", "http://*"]
  //     },
  //   })
  // );
  
  // Sets "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload"
  app.use(
    helmet.hsts({
      maxAge: 63072000,
      preload: true,
    })
  );
};