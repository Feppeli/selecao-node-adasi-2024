const Student = require('../database/models/students')
const Task = require('../database/models/tasks')

// functions for controller the API

// get all students
const getTasks = async ( req, res) => {
    Task.findAll()
    .then((task) => {
        if(task === null) {
            res.status(404).send("Nenhuma tarefa encontrada")
        }else{
            res.status(200).send(task)
        }
    })
    .catch((err) => {
        res.status(404).send(err)
    })
}

//get one task
const getTask = async (req, res) => {
    const task = await Task.findByPk(req.params.id)
    if(task === null){
        res.status(404).send("Nenhuma tarefa encontrada com esse ID")
    }else{
        res.status(200).send(task)
    }
}

// Add task
const addTask = async (req, res) => {
    const task = await Task.create(req.body)
    const name = task.name

    try{
        res.status(201).send({
            name
        })
    }catch(err) {
        res.status(404).send("Ocorreu algum erro: " + err)
    }
}

// Delete task
const deleteTask = async (req, res) => {
    const task = await Task.findByPk(req.params.id)
    await Task.destroy({
        where: {
            id: task.id
        }
    })
    .then(() =>{
        res.status(200).send('Tarefa deletada com sucesso!')
    }).catch((err) => {
        res.status(404).send("Ocorreu um erro: " + err)
    })
}

// Edit task
const editTask = async (req, res) => {
    const {id} = req.params
    const {name} = req.body

    await Task.update(
        {name: name},
        {
            where: {
                id:parseInt(id)
            }
        }
    ).then(() => {
        res.status(200).send("tarefa atualizada com sucesso")
    })
    .catch(err => {
        res.status(404).send("Erro ao atualizar a tarefa: " + err)
    })
}

module.exports = {
    getTask,
    getTasks,
    addTask,
    deleteTask,
    editTask
}