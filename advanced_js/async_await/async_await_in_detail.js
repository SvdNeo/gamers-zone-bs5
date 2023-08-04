// get the URL of the data  
let url = 'https://jsonplaceholder.typicode.com/users/1';
async function fetchData() {
    let response_data = await fetch(url);
    // 200: display the response status of the URL  
    console.log(response_data.status);
    // ok  
    console.log(response_data.statusText);
    if (response_data.status === 200) {
        let data = await response_data.text();
        //display data of the url as output  
        console.log(data); // 200  

    }
}
fetchData();
