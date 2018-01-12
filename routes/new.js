const express = require('express')
const router = express.Router()
const urlsList = require('../models/urls_schema')

router.get('/:url(*)', (req, res, next) => {
  const url = req.params.url
  const reg = /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  const regex = new RegExp(reg)
  
  if(url.match(regex)){
        const re = /^(http|https):\/\//
        const regex = new RegExp(re)
        
        const short = Math.floor(Math.random()*10000)
        
        if(url.match(regex)){
          const list = new urlsList({
            urls:{
              original: url,
              shorty: short
            }
          })
          
          list.save().then(res.json(list.urls)).catch(err => res.status(400).send('unable to save to db'))
        }else{
          const validUrl = `http://${url}`
          
          const list = new urlsList({
            urls:{
              original: validUrl,
              shorty: short
            }
          })
          
          list.save().then(res.json(list.urls).catch(err=>res.status(400).send('unable to save to db'))
        }
  }
  
  
  
  res.json({
    original: url
  })
}) 

module.exports = router