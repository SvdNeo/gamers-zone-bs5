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

