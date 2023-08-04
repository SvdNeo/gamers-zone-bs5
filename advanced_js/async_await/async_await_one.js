// example 1

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log('Fetching data...');
    await delay(5000); // Simulating an asynchronous operation
    console.log('Data fetched!');
    return { message: 'Hello Californium Frontend!, you all rock..!!!' };
}

async function main() {
    try {
        const result = await fetchData();
        console.log(result.message);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

// event loop
