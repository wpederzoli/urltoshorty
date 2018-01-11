const express = require('express')
const router = express.Router()

router.get('/:url(*)', (req, res, next) => {
  const url = req.params.url
  
  res.json({
    original: url
  })
}) 

module.exports = router