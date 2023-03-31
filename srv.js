const express = require('express');
const { stringToGrid } = require('./minMaxAi');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API REST !');
});
app.get('/move', (req, res) => {
  const boardContent = req.query.b; 
  const board = stringToGrid(boardContent, 7, 6);
  res.json(board);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});