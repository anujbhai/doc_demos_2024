const express = require('express')
const tasks = express.Router()

tasks.route('/').get((req, res) => {
  res.send('all items')
})

module.exports = tasks

