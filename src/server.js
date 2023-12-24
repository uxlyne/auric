const express = require('express');
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
