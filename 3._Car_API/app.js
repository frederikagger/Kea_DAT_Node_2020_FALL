const express = require("express");
const app = express();

app.use(express.json());

let cars = [
    { id: 1, name: "brum brum" },
    { id: 2, model: "Mitsubishi" }
];

let nextCarId = 3;

app.get("/", (req, res) => {
    return res.send({ data: "Welcome to the car API version 0.0.1" });
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ data: car });
});

app.post("/cars", (req, res) => {
    const newCar = req.body;
    newCar.id = nextCarId++;
    cars.push(newCar);
    return res.send({ data: cars });
});

app.get("/cars", (req, res) => {
    return res.send({ data: cars });
});


app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server started on port", 8080);
});
