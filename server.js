const express = require('express');
const exphbs = require("express-handlebars");
const routes = require("./controller/burgerController");

const app = express();

//PORT
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
app.use(routes);

//Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});