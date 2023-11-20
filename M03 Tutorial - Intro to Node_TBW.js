// Import the fs module
const fs = require('fs');

// Read a file asynchronously
fs.readFile('test.txt', 'utf8', (err, data) => {
  // Handle errors
  if (err) {
    console.error(err);
    return;
  }
  // Print the file content
  console.log(data);
});

// Write a file asynchronously
fs.writeFile('test.txt', 'Hello world', (err) => {
  // Handle errors
  if (err) {
    console.error(err);
    return;
  }
  // Print a success message
  console.log('File written successfully');
});
