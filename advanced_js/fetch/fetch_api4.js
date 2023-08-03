const URL = `https://api.chucknorris.io/jokes/random`;

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Geocode data: ", data);
    })
    .catch(error => {
        console.error("Error fetching geocode data: ", error);
    });
