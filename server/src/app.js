const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const process = require('process')
const config = require('./config/database')

const {sequelize} = require('./models/model')
const User = require('./models/User')
console.log(User)
  // [Function (anonymous)]
const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize
  .sync()
  .then(() => {
    app.listen(config.port)
    console.log('Server started on port'+' '+config.port)
  })
  //.then((result) => {
  //    console.log(result)
  //})

 