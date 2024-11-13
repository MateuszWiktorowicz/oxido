import axios from 'axios';
import { OpenAI } from 'openai';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();  


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const url = 'https://cdn.oxido.pl/hr/Zadanie%20dla%20JJunior%20AI%20Developera%20-%20tresc%20artykulu.txt';

  axios.get(url)
  .then(async (response) => {
    const articleTekst = response.data;

    // 2. Przygotowanie promptu
    const prompt = `
    Przetwórz poniższy tekst artykułu do formatu HTML, który może być umieszczony między znacznikami <body></body>.
    - Użyj odpowiednich tagów HTML do strukturyzacji treści (np. <h1>, <h2>, <p> itp.).
    - Wybierz odpowiednie miejsca do wstawienia grafik. Grafika powinna być po nagłówkach. Oznacz je za pomocą <img src="image_placeholder.jpg">, z atrybutem alt zawierającym dokładny prompt do wygenerowania obrazu.
    - Dodaj podpisy pod grafikami, używając tagu <p> lub <em> dla wyróżnienia tekstu.
    - Nie dołączaj tagów <html>, <head>, ani <body> — tylko zawartość, którą można umieścić bezpośrednio w sekcji <body>.

    Tekst artykułu:
    ${articleTekst}
  `;

  try {
    const answer = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const convertedArticle = answer.choices[0].message.content.trim();

    // Zapisywanie artykułu do pliku HTML
    await fs.writeFile('public/artykul.html', convertedArticle, 'utf8');
    console.log("File 'artykul.html' has been saved.");
  } catch (error) {
    console.error('OpenAi connecting error:', error.message);
  }
})
.catch((error) => {
  console.error('File downloading error:', error.message);
});