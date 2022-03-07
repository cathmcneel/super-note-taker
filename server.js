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




// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });



