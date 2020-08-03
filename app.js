const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))

app.get('/', function(req,res){
  res.render('index.html')
})

app.get('/results', function(req,res){
  res.render('results.html', {name: 'Jack'})
})

app.post('/', async function(req,res) {
    req.body.name
  console.log(req.body.name)
})

app.post('/results', function(req,res){
  res.send(users)

})

// start the server listening for requests
app.listen(process.env.PORT || 3000, () =>
  console.log("Server is running"))
  