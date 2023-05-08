const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var farmsize;

app.get("/", function (req, res) {
    res.render("extrinsicform");

});
app.get("/intrinsicform", function (req, res) {
    res.render("intrinsicform",{cattle_number:farmsize});
});

app.post("/", function (req, res) {
    farmsize = req.body.farmsize;
    console.log(req.body);
    res.redirect("/intrinsicform");
});

app.post("/intrinsicform", function (req, res) {
    console.log(req.body);
    res.redirect("/");
})


app.listen(3000, function () {
    console.log("Server is live and running.");
});