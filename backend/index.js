const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Replit Copy Backend!');
});

app.post('/execute', async (req, res) => {
  const { code, language } = req.body;

  try {
    const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language,
      version: 'latest', // Use the latest version of the language
      files: [
        {
          content: code,
        },
      ],
    });

    res.json({ output: response.data.run.output });
  } catch (error) {
    res.status(500).json({ error: 'Unable to execute code' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});