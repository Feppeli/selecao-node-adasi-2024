const express = require('express')
const app = express()
const route = require('./src/routes')
const sequelize = require('./src/database/database')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./src/swagger-output.json')
const bodyParser = require('body-parser')

// sequelize authentication
try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

app.use(express.json());
app.use(route)

app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// start server
const port = 3000
app.listen (port, async () => {
    console.log(`Server on🔥: http://localhost:${port}`)
})
