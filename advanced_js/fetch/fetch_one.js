const URL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

let fcb = response => {

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = response.json()
    console.log('data', data)
    return data;
}

let fcb2 = data => {
    console.log("Random quote: ", data);
}
fetch(URL)
    .then(fcb)
    .then(fcb2)
    .catch(error => {
        console.error("Error fetching quote data: ", error);
    });
