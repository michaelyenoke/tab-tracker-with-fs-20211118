const Joi = require('joi')


module.exports = {
    register (req, res, next){
        /*
        const schema = {
            email: Joi.string().email(),
            passwrod: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        */

        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
          
        // 第一個參數是要驗證的對象,第二個是驗證的標準
        /*
        const {error, value} = Joi.validate(req.body, schema)  
        */
        const {error} = schema.validate(req.body)

        if(error) {
            switch (error.details[0].context.key) {  // 這裡 context.key 指的就是 schema 內的內容
                case 'email':
                    res.status(400).send({
                        error:`You must provide a validate email address`
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:<br>1. It must contain ONLY the following characters: lower case, upper case, numerics.<br>2. It must be at least 8 characters in length and not greater than 32 characters.`
                        
                    })
                    break
                default:
                    res.status(400).send({
                        error: `Invalid registration information`
                    })
            }                
        } else {
            next() //讓 route 跑下一條程式
        }
        
    }
}