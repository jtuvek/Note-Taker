const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read notes data.' });
    }
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read notes data.' });
    }

    const notes = JSON.parse(data);
    newNote.id = notes.length + 1; // Assign a unique ID
    notes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to write note data.' });
      }
      res.json(newNote);
    });
  });
});

// DELETE Route
app.delete('/api/notes/:id', (req, res) => {
  const noteIdToDelete = parseInt(req.params.id);
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read notes data.' });
    }

    let notes = JSON.parse(data);
    const updatedNotes = notes.filter(note => note.id !== noteIdToDelete);

    fs.writeFile('db/db.json', JSON.stringify(updatedNotes), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update note data.' });
      }
      res.json({ message: 'Note deleted successfully.' });
    });
  });
});

// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
