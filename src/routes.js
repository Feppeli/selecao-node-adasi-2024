const express = require('express')
const route = express()

const coursesController = require('./controllers/coursesController')

route.get('/cursos', coursesController.getCourses)
route.get('/cursos/:id', coursesController.getCourse)
route.post('/curso', coursesController.addCourse)
route.delete('/cursos/:id', coursesController.deleteCourse)
route.put('/curso/:id', coursesController.editCourse)

module.exports = route