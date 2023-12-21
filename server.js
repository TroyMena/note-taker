const express = require('express');
const path = require('path');
const db = require('./db/db.json')
// console.log(db)
const fs = require('fs');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

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


app.get('/api/notes', (req, res) => {
  // console.log('This is the /api/notes')
  // console.log(db)
  res.json(db)
});

app.post('/api/notes', (req, res) => {
  // console.log('This is the /api/notes')
  // console.log(db)
  console.log("Note saved")
  console.log(req.body)

  let notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  const newNote = {
      title: req.body.title,
      text: req.body.text,
  
  };
  notesData.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
  res.json(notesData);
  Router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });
});

app.delete("/notes/:id", (req, res) => {
    let notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    notesData = notesData.filter((note) => note.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
    res.json(notesData);
  });

















app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);