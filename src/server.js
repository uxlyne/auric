const express = require('express');
const http = require('http'); // Import the http module
const path = require('path');
const cors = require('cors');
const zlib = require('zlib');
const { IamAuthenticator } = require('ibm-watson/auth');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
require('dotenv').config();

const app = express();

// Middleware for CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
}));

app.use(express.json());

const nlu = new NaturalLanguageUnderstandingV1({
  version: '2022-04-07',
  authenticator: new IamAuthenticator({
    apikey: process.env.REACT_APP_IBM_WATSON_API_KEY,
  }),
  serviceUrl: process.env.REACT_APP_IBM_WATSON_API_URL,
});

// Enhanced Error Handling Middleware
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err.stack);

  // Handle specific error types and set appropriate status codes and messages
  if (err instanceof SyntaxError) {
    res.status(400).json({ error: 'Bad Request: Invalid JSON' });
  } else {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create an HTTP server instance with maxHeaderSize option
const server = http.createServer({ maxHeaderSize: 65536 }, app);

// Handle OPTIONS requests for the /api/analyze and /api/listModels endpoints
app.options(['/api/analyze', '/api/listModels'], (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.sendStatus(200);
});

app.post('/api/analyze', async (req, res) => {
  const inputText = req.body.text;

  // Log the request headers to see what's being sent
  console.log('Request Headers:', req.headers);

  // Compress the input text using zlib
  zlib.gzip(inputText, async (err, compressedData) => {
    if (err) {
      console.error('Error compressing data:', err);
      return next(err); // Pass the error to the error handling middleware
    }

    try {
      const analyzeParams = {
        text: inputText,
        features: {
          emotion: {}, // Include the Emotion feature
        },
      };

      // Perform analysis using IBM Watson NLU
      const analysisResults = await nlu.analyze(analyzeParams);
      res.status(200).json(analysisResults);
    } catch (error) {
      console.error('Error analyzing text:', error);
      return next(error); // Pass the error to the error handling middleware
    }
  });
});

app.get('/api/listModels', async (req, res) => {
  try {
    const modelsResponse = await nlu.listModels();

    if (modelsResponse.status === 200) {
      res.status(200).json(modelsResponse.result);
    } else {
      res.status(modelsResponse.status).json({ error: 'Error listing models' });
    }
  } catch (error) {
    console.error('Error listing models:', error);
    return next(error); // Pass the error to the error handling middleware
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

// Use the server instance to listen
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







