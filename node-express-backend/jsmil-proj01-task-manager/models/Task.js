const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
})

exports.module = mongoose.model('Task', TaskSchema)

