const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

  // create a route for saving notes here
  /*
  router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();
  
    if (!validateAnimal(req.body)) {
      res.status(400).send('The animal is not properly formatted.');
    } else {
      const animal = createNewAnimal(req.body, animals);
      res.json(animal);
    }
  });
  */


module.exports = router;
