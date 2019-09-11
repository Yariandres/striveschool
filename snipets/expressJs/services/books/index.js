const express = require('express');
const router = express.Router();

// GET ALL BOOKS
router.get('/', (req, res) => {
  const query = req.query;
  console.log(query);
  // contact DB (read from file) to get user list.
  const booksList = [{ id: '123', title: 'lordoftherings', subtitle: 'fellowshipofthering' }, { id: '124', title: 'lordoftherings', subtitle: 'thetwotowers' }, { id: '125', title: 'lordoftherings', subtitle: 'thereturnoftheking' }];
  res.send(booksList);
});

// GET A SINGLE BOOK BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  // Contact the DB (read from file) to get a single user
  const singleBook = { id: '123', name: 'Marco' };
  res.send(singleBook);
});

// SAVE BOOK 

router.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  // Contact DB (read from file) add a new resourced composed by the body we received in req.body
  res.send('OK');
});

// UPDATE BOOK 
router.post('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  // Contact DB (read from file) find an book by id, then modify it with the content of req.body
  res.send('OK');
});

// DELETE BOOK 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Contact DB (read from file) to get a single book by id, delete it
  res.send('OK');
});

module.exports = router;


