const express = require('express')
const route = express()

const coursesController = require('./controllers/coursesController')
const studentsController = require('./controllers/studentsController')

// routes courses
route.get('/cursos', coursesController.getCourses)
route.get('/cursos/:id', coursesController.getCourse)
route.post('/curso', coursesController.addCourse)
route.delete('/cursos/:id', coursesController.deleteCourse)
route.put('/curso/:id', coursesController.editCourse)


//routes estudantes
route.get('/estudantes', studentsController.getStudents)
route.get('/estudante/:id', studentsController.getStudent)
route.post('/estudante', studentsController.addStudent)
route.delete('/estudante/:id', studentsController.deleteStudent)
route.put('/estudante/:id', studentsController.editStudent)
module.exports = route