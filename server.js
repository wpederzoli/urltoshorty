const express  = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

const newUrl = require('./routes/new')
const redirect = require('./routes/redirect')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://anonymus:urlmicro@ds251747.mlab.com:51747/shorties')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));


app.use('/new', newUrl)

app.listen(process.env.PORT)
                        
module.exports = app