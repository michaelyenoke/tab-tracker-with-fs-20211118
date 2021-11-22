// 這個是輸入 schema 的資料
module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email:{
            type:DataTypes.STRING,
            unique: true 
        },
        password: DataTypes.STRING
    })
