const User = require('../models/User') 


module.exports ={
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
            /*
            await User.sync({force:false}) // false 代表不刪除資料庫原有內容
            .then(() => {
                const message = User.create(req.body)
                return  message
            })
            .then(() => {
                res.send('DONE!')
            })*/
        }
        catch(err){
            res.status(400).send({
                error:'This emal account is already in use. something might be wrong, MOTHERFUCKER!'
            })
        }
    }
}

