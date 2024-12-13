const express = require('express');
const app = express();
const port = 3000;

// Static data for audio tracks
const audioLibrary = [
    {
        name: "metamorphosis",
        url: "https://drive.google.com/uc?export=download&id=1257kFevdMZutEDNO-8iVjU6_TkyQPx_W"
    },
    {
        name: "akhiyan gulaab",
        url: "https://drive.google.com/uc?export=download&id=12AxleoSoeDS4T7o67kkAiUDGzoyUR0Yo"
    }
];

// API to search for audio by name
app.get('/audio', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).send({
            message: "Please provide an audio name to search."
        });
    }

    const audio = audioLibrary.find(track => track.name.toLowerCase() === name.toLowerCase());

    if (!audio) {
        return res.status(404).send({
            message: "Audio not found. Please check the name and try again."
        });
    }

    res.status(200).send(audio);
});

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to Froggy Audio API!");
});

app.listen(port, () => {
    console.log(`Audio API is running at http://localhost:${port}`);
});
