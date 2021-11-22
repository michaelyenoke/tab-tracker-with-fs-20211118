const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/database')
const db = {}

// error  '__dirname' is not defined
// 或者用 var __dirname = path.resolve(), 然後下面的 __dirname 不變
const __variableOfChoice = path.resolve()
//console.log(__variableOfChoice)
// -> /Users/MICHAELCHEN/Desktop/WorkSpace/tag-tracker-20211118/server

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)


fs
  .readdirSync(__variableOfChoice)  //Reads the contents of the directory.
  .filter((file) => { //filter <Function> Function to filter copied files/directories.  
        file !== 'index.js'
        // console.log(file)
          // .eslintrc.js
          // node_modules
          // package-lock.json
          // package.json
          // src
          // tabtracker.sqlite
   })        
  .forEach((file) => {    
        const model = require(path.join(__variableOfChoice, file))
        //const model = sequelize.import(path.join(__variableOfChoice,file))
        db[model.name] = model
   })


db.sequelize = sequelize
db.Sequelize = Sequelize

//console.log(db) 

module.exports = db