function myFirstFunction() {
    return "Hello World";
}

// console.log(myFirstFunction());

const myVariableFunction = function () {
    console.log("Hi there from the anonymous function");
};

const myArrowFunction = () => {
    console.log("Hi there from the anonymous function");
};

function sayHiLater(anyFunctionReference) {
    // wait 5 secs
    anyFunctionReference();
}

sayHiLater(myArrowFunction);


const poke = (name) => "poke " + name;

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

interact(poke, "Anders");

const hug = (name) => "hug " + name;

interact((name) => "hug " + name, "Torben");

// still use the interact function but this time hug + name;




