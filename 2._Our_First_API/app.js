const express = require("express");
const app = express();
// const app = require("express")();



app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port", 8080);
});
