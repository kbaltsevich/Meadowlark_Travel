const express = require("express");
const expressHadlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
const handlers = require("./lib/handlers");
const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", expressHadlebars.engine);

app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static(__dirname + "/public"));

app.get("/", handlers.home);

app.get("/about", handlers.about);

//404
app.use(handlers.notFount);

//500
app.use(handlers.serverError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
