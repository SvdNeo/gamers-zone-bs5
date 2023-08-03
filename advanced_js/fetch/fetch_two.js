const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log("Posts data: ", data);
        let res = data.filter(user => user.userId == 7).map(user => user.title)
        console.log("Posts data: ", res);
    })
    .catch(error => {
        console.error("Error fetching posts data: ", error);
    });
