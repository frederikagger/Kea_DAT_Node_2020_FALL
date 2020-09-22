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

app.get("/cars", (req, res) => {
    return res.send({ data: cars });
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ data: car });
});

app.post("/cars", (req, res) => {
    const newCar = req.body;
    newCar.id = nextCarId++;
    cars.push(newCar);
    return res.send({ data: newCar });
});

app.patch("/cars/:id", (req, res) => {
    cars = cars.map(car => {
        if (car.id === Number(req.params.id)) {
            return { ...car, ...req.body, id: car.id };
        }
        return car;
    });
    return res.send({ data: cars });
});

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({ data: cars });
});

// environment variables
const port = process.env.PORT || 80;
// ternary statement
// const port = process.env.PORT ? process.env.PORT : 80;

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server started on port", Number(port));
});
