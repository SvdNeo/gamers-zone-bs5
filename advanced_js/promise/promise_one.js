// example 1

function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { message: 'Data fetched successfully' };
            if (data) {
                resolve(data);
            } else {
                reject('Error: Unable to fetch data');
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the promise
fetchData()
    .then((data) => {
        console.log(data.message);
    })
    .catch((error) => {
        console.log(error);
    });