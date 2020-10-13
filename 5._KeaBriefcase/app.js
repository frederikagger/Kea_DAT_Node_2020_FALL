const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/upload/upload.html");
});

app.get("/form", (req, res) => {
    console.log(req.query);
    return res.send({ data: req.query });
});

const port  = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Server couldn't start :( ", error);
    }
    console.log("Server started on port", Number(port));
});
