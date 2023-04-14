const express = require('express');
const {stringToGrid, setup, nextMove,chipInTheAir} = require('./minMaxAi');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API REST !');
});

app.get('/move', (req, res) => {
    const boardContent = req.query.b;
    const board = stringToGrid(boardContent);
    if (board.length === 0) {
        res.status(400).json({"detail": "Invalid board size"});
        return;
    }
    if (chipInTheAir(board)) {
        res.status(400).json({"detail": "A chip is in the air"});
        return;
    }
    setup(1);
    const move = nextMove(board);
    switch (move) {
        case "Human wins":
            res.status(422).json({"detail": "Human already won"});
            break;
        case "Machine wins":
            res.status(422).json({"detail": "Machine already won"});
            break;
        case "Draw":
            res.status(422).json({"detail": "Draw"});
            break;
        default:
            res.status(200).json({"row": move});
    }

});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
