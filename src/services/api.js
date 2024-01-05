// api.js
import axios from 'axios';

// Define the base URL for your IBM Watson API.
const baseURL = process.env.IBM_WATSON_API_URL;

// Create an Axios instance with the base URL.
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.IBM_WATSON_API_KEY}`,
  },
});

// Define functions to make specific API requests.
// For example, a function to analyze text.
export const analyzeText = async (text) => {
  try {
    const response = await api.post('/analyze', { text });
    return response.data; // Assuming the API returns data in JSON format.
  } catch (error) {
    console.error('Error analyzing text:', error);
    throw error;
  }
};

