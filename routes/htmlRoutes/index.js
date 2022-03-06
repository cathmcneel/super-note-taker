const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

//html route for Notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });
  
// HTML route for Index.html
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });






module.exports = router;
