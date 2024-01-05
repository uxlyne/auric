const express = require('express');
const path = require('path');
const cors = require('cors');
const zlib = require('zlib');
const { IamAuthenticator } = require('ibm-watson/auth');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
require('dotenv').config({ path: './src/.env' }); // Update the path to match the new location

// Debugging: Log the environment variables to the console
console.log('IBM_WATSON_API_KEY:', process.env.IBM_WATSON_API_KEY);



dotenv.config(); // Load environment variables from the .env file in the project root

const app = express();

app.use(cors());
app.use(express.json());

const nlu = new NaturalLanguageUnderstandingV1({
  version: '2022-04-07',
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_WATSON_API_KEY, // Access the API key from environment variables
  }),
  serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com',
});

app.post('/api/analyze', async (req, res) => {
  const inputText = req.body.text;

  zlib.gzip(inputText, async (err, compressedData) => {
    if (err) {
      console.error('Error compressing data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    try {
      const analyzeParams = {
        text: inputText,
        features: {
          emotion: {}, // Include the Emotion feature
        },
      };

      const analysisResults = await nlu.analyze(analyzeParams);
      res.status(200).json(analysisResults);
    } catch (error) {
      console.error('Error analyzing text:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000; // Use the specified PORT or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






