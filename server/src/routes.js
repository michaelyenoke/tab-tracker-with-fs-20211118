module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
          message: 'Your user'+' : '+req.body.email +'was registered, have fun!',
        })
      })
}