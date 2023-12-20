const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Hello world')
    res.send('Hello world')
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    console.log('Hello world')
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
























app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);