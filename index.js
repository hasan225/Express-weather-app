const express = require("express");
const path = require("path");
const requests = require("requests");
const hbs = require("hbs");
const app = express();

const staticPath = path.join(__dirname, "./public/");
// const pagesPath = path.join(__dirname "/views/")
const partialsPath = path.join(__dirname, "/views/partials/");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
// app.set("views", "if has other paths then views")
hbs.registerPartials(partialsPath);

const port = 5000;
const host = "127.0.0.1";

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});

app.listen(port, host, () => {
  console.log(`your server has started at http://${host}:${port}`);
});
