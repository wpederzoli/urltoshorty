const express  = require('express')
const router = express.Router()

const app = express()

const newUrl = require('./routes/new')

app.listen(process.env.PORT)
                        