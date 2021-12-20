const express = require("express");
const expressHadlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", expressHadlebars.engine);

app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//404
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

//500
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
