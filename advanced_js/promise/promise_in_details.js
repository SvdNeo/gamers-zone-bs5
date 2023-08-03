// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );


// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f();

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f().then(function (result) {
    console.log(result)
});