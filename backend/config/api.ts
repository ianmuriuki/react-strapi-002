// config/api.ts
export default {
  rest: {
    prefix: '/api',            // Customize the prefix for the REST endpoints
    defaultLimit: 25,          // Set the default limit for the number of records returned
    maxLimit: 100,             // Set the max limit for the number of records returned
    withCount: true,           // Enable pagination count
  },
};
