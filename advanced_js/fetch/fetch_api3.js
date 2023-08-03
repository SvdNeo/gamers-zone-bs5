const URL = "https://api.github.com/users/octocat";

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("User data: ", data);
    })
    .catch(error => {
        console.error("Error fetching user data: ", error);
    });
