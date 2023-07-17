// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

// "Producing Code" can take some time and "Consuming Code" must wait for the result.

const myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);

const myPromise2 = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love Coding Too..!"); }, 3000);
});

myPromise2.then(function (value) {
    document.getElementById("promise_id").innerHTML = value;
});


// ECMAScript 2018 finalizes the full implementation of the Promise object with Promise.finally:

let myPromise3 = new Promise(function (a, b) { });

myPromise3.then();
myPromise3.catch();
myPromise3.finally();

// Promise any():
// const first = Promise.any([prom1, prom2, prom3]);

// ---------------
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result); // Promise resolved
    },
)


