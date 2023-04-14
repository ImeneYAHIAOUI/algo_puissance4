const express = require('express');
const {stringToGrid, setup, nextMove} = require('./minMaxAi');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API REST !');
});

app.get('/move', (req, res) => {
    const boardContent = req.query.b;
    const board = stringToGrid(boardContent);
    setup(1);
    const move = nextMove(board);
    if (move === "Game is over") {
        res.status(422).json({ "detail" : "Grid is full" });
    }
    var response = { "row" : move };
    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
