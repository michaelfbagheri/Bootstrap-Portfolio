var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', function (req, res) {
  res.render('index')
});

app.get('/contact', function (req, res) {
  res.render('contact')
});

app.get('/portfolio', function (req, res) {
  res.render('portfolio')
});


// var routes = require('./routes/index');
// app.use(routes);

app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});