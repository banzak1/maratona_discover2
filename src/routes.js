//biblioteca 
const express = require("express")

//rota para o express
const routes = express.Router()

// caminho views base
const views = __dirname + "/views/"

// request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) =>  res.render(views + "job"))
routes.get('/job-edit', (req, res) =>  res.render(views + "job-edit"))
routes.get('/profile', (req, res) =>  res.render(views + "profile"))


module.exports = routes;