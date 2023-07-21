import axios from 'axios';

const APIKEY = import.meta.env.VITE_OPEN_AI_API_KEY;
const ORG_ID = import.meta.env.VITE_OPEN_AI_ORG_ID;

const gpt = axios.create({
  baseURL: 'https://api.openai.com/v1/chat',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${APIKEY}`,
    'OpenAI-Organization': ORG_ID,
  },
});

export default gpt;
