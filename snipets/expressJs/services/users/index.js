const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // contact DB (read from file) to get user list.
  const userList = [{ id: '123', name: 'Marco' }];
  userList.send(userList);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single user
  const singleUser = { id: '123', name: 'Marco' };
  res.send(singleUser);

});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

// UPDATE USER 
router.post('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send('OK')
});

// DELETE USERS 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single user to delete
  res.send('OK')
});

module.exports = router;

