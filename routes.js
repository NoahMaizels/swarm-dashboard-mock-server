const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
  res.json("This is the dashboard API")
})



module.exports = app