// example 2
async function fetchData(userId) {

    // get the URL of the data  
    let url = `https://jsonplaceholder.typicode.com/users/${1}`;
    try {
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
    catch (error) {
        console.error('Error:', error);
        throw error;
    }

}

async function main() {
    try {
        const uid = 1; // Replace with the desired city
        await fetchData(uid);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();


