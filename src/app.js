require('dotenv-safe').config()

const express = require("express")
const cors = require('cors');

const app = express()
const mongoose = require ('./database/mongooseConnect')

const index = require("./routes/index")
const opportunitiesRoutes = require("./routes/opportunitiesRoutes.js")
const usersRoutes = require('../src/routes/usersRoutes.js');


const swaggerFile = require("../swagger/swagger_output.json");
const swaggerUi = require("swagger-ui-express");

mongoose.connect()

app.use("/minha-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use(express.json())


app.use("/", index);
app.use("/opportunities", opportunitiesRoutes);
app.use("/users", usersRoutes)


module.exports = app