export default [
  'strapi::logger', // Built-in logger
  'strapi::errors', // Built-in error handler
  'strapi::security', // Secure headers
  // Cross-Origin Resource Sharing (CORS) headers
  {
    name: 'strapi::cors', // Cross-Origin Resource Sharing (CORS) headers
    config: {
      origin: ['http://localhost:5173', 'https://yourfrontendurl.com'], // Add your frontend URLs here
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true, // Enable sending cookies with requests (if needed)
    }
  },
  'strapi::poweredBy',  // Add headers related to powered by strapi
  'strapi::query', // Parse URL params
  'strapi::body', // Parse HTTP body
  'strapi::session', // Session middleware
  'strapi::favicon',  // Add favicon
  'strapi::public', // Serve static files
];
