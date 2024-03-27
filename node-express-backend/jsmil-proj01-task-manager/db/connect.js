const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://openmindedlearning:adminadmin@jsdemoapps.nmvq9op.mongodb.net/jsmilproj01_task?retryWrites=true&w=majority&appName=JSDemoApps'

mongoose.connect(connectionString)
  .then(() => console.log('database connection established...'))
  .catch((err) => console.log('Error:', err))
