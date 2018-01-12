const express = require('express')
const router = express.Router()

router.get('/:url(*)', (req, res, next) => {
  const url = req.params.url
  const reg = /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  const regex = new RegExp(reg)
  
  if(url.match(regex)){
        const re = /^(http|https):\/\//
        const regex = new RegExp(re)
        
        url.match(regex) ? {
          
        } : null
  }
  
  
  
  res.json({
    original: url
  })
}) 

module.exports = router