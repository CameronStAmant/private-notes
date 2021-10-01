const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'NOT IMPLEMENTED';

export default baseUrl;
