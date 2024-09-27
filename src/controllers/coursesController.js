// Config Database
const Course = require('../database/models/courses')


// functions for controller the API

// get all courses 
const getCourses = async  (req, res) => {
    Course.findAll()
    .then((courses) => {
        if(courses === null){
            res.status(500).send("Nenhum curso com esse ID foi encontrado")
        }
        else{
            res.status(200).send(courses)
        }
    })
    .catch((err) => {
        req.status(404).send(err)
    })

}

// get one course
const getCourse = async (req, res) => {
    const course = await Course.findByPk(req.params.id)
    if(course === null){
        res.status(500).send("Nenhum curso com esse ID foi encontrado")
    }else{
    res.status(200).send(course)
    }

}

// Add course
const addCourse = async (req, res) => {
    const course = await Course.create(req.body);
    const id = parseInt(course.id)
    const name = course.name
    
    console.log(typeof(id))
    try {
        res.status(201).send({
            id,
            name
        })
    }catch(err) {
        res.status(500).send("Ocorreu algum erro: " + err)
    }
}

// Delete course
const deleteCourse = async (req, res) => {
    const course = await Course.findByPk(req.params.id)
    console.log(course + typeof(course))
    await Course.destroy({
        where: {
            id: course.id
        }
    })
    .then(() => {
        res.status(200).send('Cursos deletado com sucesso!')
    }).catch((err) => {
        res.status(500).send('Ocorreu um erro: ' + err)
    })
    

}

module.exports = {
    getCourses,
    getCourse,
    addCourse,
    deleteCourse
}