//imported all the libraries
const express = require('express');
const app = express();
const cors = require('cors');

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all users
app.get('/users', (req, res) => {
  res.json([
    { name: "John", age: 25 },
    { name: "Mike", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Jack", age: 32 },
  ]);
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
