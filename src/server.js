require('dotenv').config({ path: './src/api.env' });

const express = require('express');
const axios = require('axios');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');
const language = require('@google-cloud/language');
const app = express();
const cors = require('cors');
const http = require('http');

app.use(cors()); // Keep CORS for local development

app.use(express.json());

// Initialize OAuth2Client with your credentials
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/callback'
);

// Define the API route for sentiment analysis
app.post('/api/sentiment', async (req, res) => {
  const text = req.body.text;
  const googleApiUrl = 'https://language.googleapis.com/v2/documents:analyzeSentiment';

  try {
    const response = await axios.post(googleApiUrl, {
      document: {
        content: text,
        type: 'PLAIN_TEXT'
      },
      encodingType: 'UTF8'
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Sentiment analysis failed:', error);
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
});

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle SPA routing - serve index.html for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = http.createServer(app);
server.maxHeadersCount = 2000; // Increase the max header count if necessary
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





