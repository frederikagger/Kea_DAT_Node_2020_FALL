const express = require("express");
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');

const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();

const uploadPage = fs.readFileSync(__dirname + "/public/upload/upload.html").toString();
const aboutPage = fs.readFileSync(__dirname + "/public/about/about.html").toString();
const downloadPage = fs.readFileSync(__dirname + "/public/download/download.html").toString();

app.get("/", (req, res) => {
    return res.send(header + uploadPage + footer);
});

app.get("/about", (req, res) => {
    return res.send(header + aboutPage + footer);
});

app.get("/download/:id", (req, res) => {
    return res.send(header + downloadPage + footer);
});

const uploadRouter = require("./routes/upload.js");
app.use(uploadRouter);

const port  = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Server couldn't start :( ", error);
    }
    console.log("Server started on port", Number(port));
});
