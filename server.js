const express  = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const newUrl = require('./routes/new')

app.use(bodyParser.json())
app.use(cors())


app.use('/new', newUrl)

app.listen(process.env.PORT, () =>{
  console.log('listening')
})
                        

module.exports = app