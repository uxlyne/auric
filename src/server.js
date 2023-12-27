require('dotenv').config({ path: 'api.env' });

const express = require('express');
const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
const app = express();

app.use(express.json());

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'YOUR_REDIRECT_URI' // Set your redirect URI here
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
      encodingType: 'UTF8'  // or use 'NONE' if you don't need sentence offsets
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`  // Use OAuth token if needed
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




