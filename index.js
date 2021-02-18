const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/About.html", (req, res) => res.sendFile(__dirname + "/About.html"));

app.get("/Contact.html", (req, res) => res.sendFile(__dirname + "/Contact.html"));

app.get("/Product.html", (req, res) => res.sendFile(__dirname + "/Product.html"));

app.get("/Service.html", (req, res) => res.sendFile(__dirname + "/Service.html"));

app.listen(process.env.PORT || 3000, function(){
    console.log("runing");
});