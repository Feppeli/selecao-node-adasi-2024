const express = require('express')
const route = express()

const coursesController = require('./controllers/coursesController')

route.get('/cursos', coursesController.getCourses)
// route.get('/cursos/:id', cursosControler.getCurso)
// route.post('/cursos', cursosController.addCursos)
// route.delete('/cursos/:id', cursosControler.deleteCurso)

module.exports = route