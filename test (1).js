// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Write a response to the client
  res.write('Hello from Node.js');
  // End the response
  res.end();
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
