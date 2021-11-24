const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


// 同步資料庫
const User = require('./models/User') 
User.sync({force:false})


// 把 node 的 port 加回來; 和 rds 的 port 分開
app.listen(8081);
console.log('express is ok!')

/*
//step01:連接資料庫 -> models/index.js
var Sequelize = require('sequelize')
var sequelize = new Sequelize('test01', 'michaelyenoke', '1qaz2wsx3edc', {
  host: 'database-1.cqwpdgcki6p6.ap-southeast-1.rds.amazonaws.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }})
*/ 

/*
//step02:建立物件模型 -> models/User.js
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' 
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true 
})
*/

/*
const User = require('./models/User')
//step03:實作資料新增 -> app.js
User.sync({force: true}).then(function () {
  return User.create({
    email: 'John@gmail.coom',
    passwrod: '123456'
  });
});
*/


