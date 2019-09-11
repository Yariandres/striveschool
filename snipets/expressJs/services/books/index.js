const express = require('express');
const router = express.Router();

// GET ALL BOOKS
router.get('/', (req, res) => {
  const query = req.query;
  // contact DB (read from file) to get user list.
  const bookList = [{ id: '123', name: 'Marco', subtitle: 'someSubtitle' }];
  res.send(bookList);
});

// GET A SINGLE BOOK BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single user
  const singleBook = { id: '123', name: 'Marco' };
  res.send(singleBook);
});

// SAVE BOOK 

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

// UPDATE BOOK 
router.post('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send('OK')
});

// DELETE BOOK 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single user to delete
  res.send('OK')
});

module.exports = router;


