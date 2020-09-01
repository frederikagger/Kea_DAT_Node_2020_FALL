
// accessing let before initialization throws an error
// console.log(name);
let name = "Anders";

{
    {
        let scopedVar = 123;
    }
    // let sticks to its scope or below
    // console.log(scopedVar);
}

const myObj = {
    key: "value"
};


const fruits = [{}, 1, 2, "apple", "banana"];

fruits.push({});
fruits.pop();
fruits.pop();

console.log(fruits[0]);


