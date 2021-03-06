//biblioteca 
const express = require("express")

//rota para o express
const routes = express.Router()

// caminho views base
const views = __dirname + "/views/"

const profile = {
    name: "Banzak",
    avatar: "https://avatars.githubusercontent.com/u/17907755?v=4",
    "monthly-budget": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4
}


const jobs = []

// request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) =>  res.render(views + "job"))
routes.post('/job', (req, res) => {

    const lastId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now()
    })
    return res.redirect('/')
})
routes.get('/job-edit', (req, res) =>  res.render(views + "job-edit"))
routes.get('/profile', (req, res) =>  res.render(views + "profile", { profile }))



module.exports = routes;