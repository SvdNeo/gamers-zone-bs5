const axios = require('axios');

axios.get('http://localhost:4000/api/books')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        if (error.response) {
            // The request was made, but the server responded with an error status code
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made, but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error:', error.message);
        }
        console.log(error.config);
    });
