const express = require('express');
const { data } = require('./db/db.json');

const app = express();


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });


  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

/*
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes'); 
*/

