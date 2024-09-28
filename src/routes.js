const express = require('express')
const route = express()

const coursesController = require('./controllers/coursesController')
const studentsController = require('./controllers/studentsController')
const taskController = require('./controllers/tasksCotnroller')

// routes: courses
route.get('/cursos', coursesController.getCourses)
route.get('/cursos/:id', coursesController.getCourse)
route.post('/curso', coursesController.addCourse)
route.delete('/cursos/:id', coursesController.deleteCourse)
route.put('/curso/:id', coursesController.editCourse)

//routes: students
route.get('/estudantes', studentsController.getStudents)
route.get('/estudante/:id', studentsController.getStudent)
route.post('/estudante', studentsController.addStudent)
route.delete('/estudante/:id', studentsController.deleteStudent)
route.put('/estudante/:id', studentsController.editStudent)

//Routes: tasks
route.get('/tarefas', taskController.getTasks)
route.get('/tarefa/:id', taskController.getTask)
route.post('/tarefa', taskController.addTask)
route.delete('/tarefa/:id', taskController.deleteTask)
route.put('/tarefa/:id', taskController.editTask)


module.exports = route