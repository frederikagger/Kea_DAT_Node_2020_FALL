const express = require("express");
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');
const uploadPage = fs.readFileSync(__dirname + "/public/upload/upload.html").toString();


app.get("/", (req, res) => {
    return res.send(uploadPage);
});

app.get("/about", (req, res) => {
    return res.sendFile(__dirname + "/public/about/about.html");
});

app.get("/download", (req, res) => {
    return res.sendFile(__dirname + "/public/download/download.html");
});

app.post("/form", (req, res) => {
    return res.send({ data: req.body });
});

const port  = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Server couldn't start :( ", error);
    }
    console.log("Server started on port", Number(port));
});
