export default [
  'strapi::logger', // Built-in logger
  'strapi::errors', // Built-in error handler
  'strapi::security', // Secure headers
  'strapi::cors', // Cross-Origin Resource Sharing (CORS) headers
  'strapi::poweredBy',  // Add headers related to powered by strapi
  'strapi::query', // Parse URL params
  'strapi::body', // Parse HTTP body
  'strapi::session', // Session middleware
  'strapi::favicon',  // Add favicon
  'strapi::public', // Serve static files
];
