const express = require('express');
const fs = require('fs');

const router = express.Router();

// GET ALL STUDENTS
router.get('/', (req, res) => {
  // contact the BD to get users
  var buffer = fs.readFileSync('students.json');
  var content = buffer.toString();

  res.send(content);
});

// GET STUDENT BY ID
router.get('/:id', (req, res) => {
  var buffer = fs.readFileSync('students.json');
  var content = buffer.toString();

  var studentDB = JSON.parse(content);
  var student = studentDB.find(x => x.ID == req.params.id);
  if (!student)
    res.send('Cannot find student')
  else
    res.send(student);
});

router.get('/projects/:id', (req, res) => {
  var buffer = fs.readFileSync('students.json');
  var content = buffer.toString();
  var projects = JSON.parse(content);

  res.send(projects.filter(x => StudentID == req.params.id));
})


router.post("/", (request, response) => {
  var newStudent = request.body;

  var buffer = fs.readFileSync("students.json");
  var content = buffer.toString();
  var studentsDB = JSON.parse(content);

  newStudent.ID = studentsDB.length + 1;

  studentsDB.push(newStudent);

  fs.writeFileSync("students.json", JSON.stringify(studentsDB));

  response.send(studentsDB);
});

router.delete("/:id", (req, res) => {
  var buffer = fs.readFileSync("students.json");
  var content = buffer.toString()
  var studentsDB = JSON.parse(content)
  var newDb = studentsDB.filter(x => x.ID != req.params.id)
  fs.writeFileSync("students.json", JSON.stringify(newDb))

  res.send(newDb)
});

// UPDATE STUDENT
router.put("/:id", (req, res) => {
  var buffer = fs.readFileSync("students.json");
  var content = buffer.toString()
  var studentsDB = JSON.parse(content)
  var newDb = studentsDB.filter(x => x.ID != req.params.id) //removing previous item
  var student = req.body;
  student.ID = req.params.id;
  newDb.push(student) //adding new item 
  fs.writeFileSync("students.json", JSON.stringify(newDb))

  res.send(newDb)
});



module.exports = router;


