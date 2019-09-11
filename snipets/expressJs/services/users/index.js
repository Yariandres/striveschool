const express = require('express');
const router = express.Router();

// GET ALL USERS
router.get('/', (req, res) => {
  // Contact DB (read from file) to get the users list
  const usersList = [{ id: '123', name: 'Marco' }];
  res.send(usersList)
});


// GET SINGLE USER BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single user
  const singleUser = { id: '123', name: 'Marco' };
  res.send(singleUser);
});

// SAVE USER
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

// UPDATE USER 
router.put('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send('OK')
});

// DELETE USERS 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single user to delete
  res.send('OK');
});

module.exports = router;

