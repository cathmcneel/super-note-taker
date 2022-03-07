// Main Server Code
const express = require('express');
const path = require('path');
const fs = require('fs');

// Reading test data from Database
let notes = require('./Develop/db/db.json');


// creating server 
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public')); 


// Routes
// homepage route
app.get('/', (request, response) => response.sendFile(path.join(__dirname, '/Develop/public/index.html')));

// notes route
app.get('/notes', (request, response) => response.sendFile(path.join(__dirname, '/Develop/public/notes.html')));

// this is the API view of our data
app.get('/api/notes', (request, response) => response.json(notes));

// We are POSTing data to our database
// our database is db.json
app.post('/api/notes', (request, response) => {

    // creating new note from the text in our request
    let newNote = request.body

    // add ID to new notes
    newNote.id = Math.floor(Math.random() * 10000);

    //log data in console
    console.log("Adding Note: ", newNote);

    //add data to notes array
    notes.push(newNote);
    console.log(notes);

    response.end();
});


//DELETE Data from database
app.delete('/api/notes/:id', (request, response) => {

    //creating an ID of our request parameters
    const selectedNoteID = request.params.id;
    console.log(`Removing item with id: ${selectedNoteID}`);

    // //remove item from notes array
    notes = notes.filter(note => note.id != selectedNoteID);

    response.end();
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
