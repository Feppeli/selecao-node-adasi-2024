const Activities = require('../database/models/activities')
// functions for controller the API

// get all activities 
const getActivities = async  (req, res) => {
    Activities.findAll()
    .then((activities) => {
        if(activities === null){
            res.status(500).send("Nenhuma atividade encontrada")
        }
        else{
            res.status(200).send(activities)
        }
    })
    .catch((err) => {
        res.status(404).send(err)
    })

}

// get one activities
const getActivitie = async (req, res) => {
    const activitie = await Activities.findByPk(req.params.id)
    if(student === null){
        res.status(404).send("Nenhum curso com esse ID foi encontrado")
    }else{
        res.status(200).send(activitie)
    }

}



// Add Activitie
const addActivitie = async (req, res) => {  

    const {date, start_activitie, end_activitie} = req.body



    const isvalidateActivity = (date, start_activitie, end_activitie ) => {
        const startDateTime = new Date(`${date}T${start_activitie}`);
        const endDateTime = new Date(`${date}T${end_activitie}`);

        return startDateTime < endDateTime
    }

    if(!isvalidateActivity(date, start_activitie, end_activitie)){
        return res.status(400).send('A hora de término deve ser após a hora de início.');
    }else{
        
    }
    

    try{
        await Activities.create(req.body)
    .then((activitie) => {
        res.status(201).send(activitie)
    })
    .catch(err =>{
        res.status(400).send("Ocorreu algum erro:" + err)
    })
    }
    catch(err){
        res.status(400).send("ocorreu algum erro" + err)
    }


    // const id = parseInt(activitie.id)
    // const task = activitie.id
    // const student = activitie.student
    // const start = activitie.start_activitie
    // const end = activitie.end_activitie

    // //opitional
    // const beginning = activitie.beginning_activie
    // const finish = activitie.finish_activitie

    // try {
    //     res.status(201).send({
    //         id,
    //         date,
    //         task,
    //         student,
    //         start,
    //         end,
    //         beginning,
    //         finish
    //     })
    // }catch(err) {
    //     res.status(404).send("Ocorreu algum erro: " + err)
    // }
}

// Delete Student
const deleteActivitie = async (req, res) => {
    const activitie = await Activities.findByPk(req.params.id)
    await activitie.destroy({
        where: {
            id: activitie.id
        }
    })
    .then(() => {
        res.status(200).send('Tarefa deletada com sucesso!')
    }).catch((err) => {
        res.status(404).send('Ocorreu um erro: ' + err)
    })
    
}

// Edit Student
const editAcitivitie = async (req, res) => {

    const {id} = req.params
    const {name} = req.body

    await Activities.update( // refatorar para tratar a entrada do ID
        {name: name},
        {
            where: {
                id: parseInt(id)
            }
        }
    )
    .then(() => {
        res.status(200).send("Tarefa atualizada com sucesso")
    })
    .catch(err => {
        res.status(404).send("Erro ao atualizar o curso: " + err)
    })
}

module.exports = {
    getActivitie,
    getActivities,
    addActivitie,
    deleteActivitie,
    editAcitivitie
}