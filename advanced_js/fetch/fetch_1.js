fetch('https://api.github.com/orgs/nodejs')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))


fetch('https://api.github.com/orgs/nodejs', {
    headers: new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


fetch('https://api.github.com/orgs/nodejs', {
    credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
})
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()`
    })
    .catch(error => console.error(error))


// postRequest('http://localhost:4000/api/book', { title: 'Wise and Otherwise' })
//     .then(data => console.log(data)) // Result from the `response.json()` call
//     .catch(error => console.error(error))

// function postRequest(url, data) {
//     return fetch(url, {
//         credentials: 'same-origin', // 'include', default: 'omit'
//         method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//         body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         }),
//     })
//         .then(response => response.json())
// }


// fetch('http://localhost:4000/api/books', {
//     credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data) // Prints result from `response.json()`
//     })
//     .catch(error => console.error(error))


// const url = 'http://localhost:4000/api/books';

// async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     console.log(data)
// }

// getData(url);