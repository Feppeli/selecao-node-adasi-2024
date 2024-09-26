// Config Database
const Course = require('../database/models/courses')


// functions for controller the API
const getCourses = async  (req, res) => {
    Course.findAll()
    .then((courses) => {
        res.status(200).send(courses)
    })
    .catch((err) => {
        console.log(err)
    })

}

module.exports = {
    getCourses
}