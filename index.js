const express = require('express')
const app = express()
const route = require('./src/routes')
const sequelize = require('./src/database/database')
const port = 3000

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');

try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

app.use(express.json());
app.use(route)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen (port, async () => {
    console.log(`Server on🔥: http://localhost:${port}`)
})

