
// Promises
// two states
// pending
// fulfilled
   // - resolve, reject

/*new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Everything went well");
        }, 3000);
    } catch {
        reject("Something went wrong");
    }
})
.then(output => console.log(output))
.catch(output => console.log(output));*/

function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Not every Promise works out this way");
        }, 4000);
    });
}

/*(async function callMyPromise() {
    // myPromiseFunction().then(console.log);
    const output = await myPromiseFunction();
    console.log(output);
})();*/

(async () => {
    try {
        const output = await myPromiseFunction();
        console.log(output);
    } catch {
        // handle catch here
    }
})();
