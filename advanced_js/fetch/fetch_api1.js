const URL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Random quote: ", data.quoteText);
    })
    .catch(error => {
        console.error("Error fetching quote data: ", error);
    });
