var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')
var route = require('./route')
var data = require('./views/data')
var PORT = 3000
var app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
var pth = path.join(__dirname, 'views')

app.get('/', function(req, res) {
  route.readAsync(function(err, readRes) {
    var response = readRes
    res.render('home', response)
  });
})

app.listen(3000, function() {
  console.log("the server is listening on 3000")
})
