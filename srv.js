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
    console.log(board);
    if (board === []) {
        res.status(400).json({"detail": "Taille de grille incorrecte"});
    } else {
        setup(1);
        const move = nextMove(board);
        if (move === "Game is over") {
            res.status(422).json({"detail": "Grid is full"});
        }
        res.status(200).json({"row": move});
    }
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
