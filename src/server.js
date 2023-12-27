require('dotenv').config({ path: 'src/api.env' });

const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Define the API proxy route
app.get('/api/proxy', async (req, res) => {
  // Replace with the specific endpoint you're targeting
  const apiUrl = 'https://language.googleapis.com'; 

  try {
    const response = await axios.get(apiUrl, {
      params: {
        key: process.env.GOOGLE_API_KEY,
        // ... include other required query params ...
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('API request failed:', error);
    if (error.response) {
      // Forward the status code from the API and send the error message
      res.status(error.response.status).send(error.response.data);
    } else {
      // Handle network errors or other issues not related to HTTP response
      res.status(500).send('Internal Server Error');
    }
  }
});

// Handle SPA routing - serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


