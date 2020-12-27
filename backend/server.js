const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()

global.__basedir = __dirname;

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors())

app.use('/uploads', express.static(path.join(__basedir + '/resources/uploads')))

const initRoutes = require('./src/routes')

app.use(express.urlencoded({extended: true}))
initRoutes(app)

let port = 8080

app.listen(port, () => {
    console.log(`API running on port ${port}`);
})