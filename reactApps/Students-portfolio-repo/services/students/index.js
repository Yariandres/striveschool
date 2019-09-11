const express = require('express');
const router = express.Router();

// GET ALL STUDENTS
router.get('/', (req, res) => {
  // contact the BD to get users
  const studentList = [{}]
  res.send(studentList)
})

// GET STUDENT BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single student
  const singleStudent = {};
  res.send(singleStudent);
});

// SAVE STUDENT
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

// UPDATE STUDENT 
router.put('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send('OK')
});

// DELETE STUDENT 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Contact the DB (read from file) to get a single student to delete
  res.send('OK');
});

module.exports = router;


