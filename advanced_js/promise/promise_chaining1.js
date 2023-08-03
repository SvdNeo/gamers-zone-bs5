function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log(data);
        return fetchData(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
