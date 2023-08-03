const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Posts data: ", data);
    })
    .catch(error => {
        console.error("Error fetching posts data: ", error);
    });
