ar express = require('express')
var app = express()


app.use(bodyParser.json()) // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) // for parsing application/x-www-form-urlencoded

//This is the route the API will call
app.post('/new_message', function(req, res) {
  console.log("Received new booking")
  const { message } = req.body

})

// Finally, start our server
app.listen(3000, function() {
  console.log('Listening for reserves in www.lacasaazullanzarote.com !')
})
