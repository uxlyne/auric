// Define the port number
const PORT = 3000; // You can use any port number you prefer

const express = require('express');
const axios = require('axios');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');
const language = require('@google-cloud/language');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'YOUR_REDIRECT_URI'
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

// New route for quickstart function
app.get('/api/quickstart', async (req, res) => {
  try {
    const sentimentResult = await quickstart();
    res.json(sentimentResult);
  } catch (error) {
    console.error('Error in quickstart API:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Quickstart function
async function quickstart() {
  const client = new language.LanguageServiceClient();
  const text = 'Hello, world!';
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;

  return {
    text: text,
    score: sentiment.score,
    magnitude: sentiment.magnitude
  };
}

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle SPA routing - serve index.html for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





