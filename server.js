// Main Server Code
const express = require('express');
const path = require('path');
const fs = require('fs');

// Reading test data from Database
let notes = require('./Develop/db/db.json');
notes = JSON.parse(notes);

const PORT = process.env.PORT || 3001;
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes'); 


const app = express();


  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));

// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });



