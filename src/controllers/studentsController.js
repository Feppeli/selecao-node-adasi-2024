// Config Database
const Student = require('../database/models/students')


// functions for controller the API

// get all students 
const getStudents = async  (req, res) => {
    Student.findAll()
    .then((students) => {
        if(students === null){
            res.status(500).send("Nenhum curso com esse ID foi encontrado")
        }
        else{
            res.status(200).send(students)
        }
    })
    .catch((err) => {
        res.status(404).send(err)
    })

}

// get one student
const getStudent = async (req, res) => {
    const student = await Student.findByPk(req.params.id)
    if(student === null){
        res.status(404).send("Nenhum curso com esse ID foi encontrado")
    }else{
        res.status(200).send(student)
    }

}

// Add Student
const addStudent = async (req, res) => {
    const student = await Student.create(req.body);
    const id = parseInt(student.id)
    const name = student.name
    const registration = student.registration
    const courseId = student.courseId

    
    try {
        res.status(201).send({
            id,
            name,
            registration,
            courseId
        })
    }catch(err) {
        res.status(404).send("Ocorreu algum erro: " + err)
    }
}

// Delete Student
const deleteStudent = async (req, res) => {
    const student = await Student.findByPk(req.params.id)
    await Student.destroy({
        where: {
            id: student.id
        }
    })
    .then(() => {
        res.status(200).send('Cursos deletado com sucesso!')
    }).catch((err) => {
        res.status(404).send('Ocorreu um erro: ' + err)
    })
    
}

// Edit Student
const editStudent = async (req, res) => {

    const {id} = req.params
    const {name} = req.body

    await Student.update( // refatorar para tratar a entrada do ID
        {name: name},
        {
            where: {
                id: parseInt(id)
            }
        }
    )
    .then(() => {
        res.status(200).send("Curso atualizado com sucesso")
    })
    .catch(err => {
        res.status(404).send("Erro ao atualizar o curso: " + err)
    })
}

module.exports = {
    getStudents,
    getStudent,
    addStudent,
    deleteStudent,
    editStudent
}