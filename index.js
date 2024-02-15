const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Endpoint to fetch questions and answers
app.get('/questions', (req, res) => {
  fs.readFile('question_bank.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading question bank:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
      const questionBank = JSON.parse(data);
      res.json(questionBank);
    }
    catch (parseError) {
      console.error('Error parsing question bank:', parseError);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
