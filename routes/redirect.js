const express = require('express')
const router = express.Router()
const urlsList = require('../models/urls_schema')

router.get('/:id', (req, res, next)=>{
  const id = req.params.id
  
  urlsList.findOne({'urls.shorty' : id} , 'urls.original', (err, data)=>{
    err ? res.send('There was an error') : res.redirect(301, data.urls.original)
  })
})

