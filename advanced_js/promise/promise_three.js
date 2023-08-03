function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData('https://jsonplaceholder.typicode.com/todos/32')
    .then(data => console.log(data))
    .catch(error => console.log(error));
