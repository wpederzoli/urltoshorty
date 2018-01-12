const express  = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const newUrl = require('./routes/new')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));


app.use('/new', newUrl)

app.listen(process.env.PORT)
                        
module.exports = app