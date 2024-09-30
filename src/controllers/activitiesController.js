const Activities = require('../database/models/activities')
const { isWithinSixHour, isvalidateActivity } = require('../midlewares/activitiesValidations')
// functions for controller the API

// get all activities 
const getActivities = async (req, res) => {
    Activities.findAll()
        .then((activities) => {
            if (activities === null) {
                res.status(500).send("Nenhuma atividade encontrada")
            }
            else {
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
    if (student === null) {
        res.status(404).send("Nenhum curso com esse ID foi encontrado")
    } else {
        res.status(200).send(activitie)
    }

}

// Add Activitie
const addActivitie = async (req, res) => {

    const { date, start_activitie, end_activitie, finish_activitie, beginning_activie } = req.body

    // validação para ver se a hora final é maior que a hora inicial
    if (!isvalidateActivity(date, start_activitie, end_activitie)) {
        return res.status(400).send('A hora de término deve ser após a hora de início.')
    }

    // Vaidação para checkar se a hora final está apenas 6 horas a frente da hora inicial
    if (!isWithinSixHour(date, start_activitie, end_activitie)) {
        return res.status(400).send('O termino da atividade só pode ser definida sendo 6 horas a frente da hora de inicio da atividade.')
    }

    // Validação para checkar se finish_activitie está antes de end_activitie
    if (finish_activitie) {
        const end = new Date(`${date}T${end_activitie}`);
        const finish = new Date(`${date}T${finish_activitie}`);
        if (finish > end) {
            return res.status(400).send('finish_activitie deve ser antes de end_activitie.');
        }
    }

    // Validação para checkar se beginning_activie está dentro de 15 minutos do start_activitie
    if (beginning_activie) {
        const start = new Date(`${date}T${start_activitie}`);
        const beginning = new Date(`${date}T${beginning_activie}`);
        const startWithToleranceBefore = new Date(start.getTime() - 15 * 60 * 1000); // 15 minutos antes
        const startWithToleranceAfter = new Date(start.getTime() + 15 * 60 * 1000); // 15 minutos depois

        if (beginning < startWithToleranceBefore || beginning > startWithToleranceAfter) {
            return res.status(400).send('beginning_activie deve estar dentro de 15 minutos antes ou depois do start_activitie.');
        }
    }

    // Glória a Deus, passou por todas as validações.
    try {
        await Activities.create(req.body)
            .then((activitie) => {
                res.status(201).send(activitie)
            })
            .catch(err => {
                res.status(400).send("Ocorreu algum erro:" + err)
            })
    }
    catch (err) {
        res.status(400).send("ocorreu algum erro" + err)
    }

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

    const { id } = req.params
    const { name } = req.body

    await Activities.update( // refatorar para tratar a entrada do ID
        { name: name },
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