import axios from 'axios';
import { OpenAI } from 'openai';
require('dotenv').config();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });