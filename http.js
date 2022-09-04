// http.js
export default {
  port: 3000,
  fetch(request) {
    return new Response('Welcome to Bun!');
  },
  callback() {
    console.log('Server is running on port 3000');
  },
};
