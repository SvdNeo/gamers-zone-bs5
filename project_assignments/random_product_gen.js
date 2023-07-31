// Function to generate a random product name
function getRandomProductName() {
    const products = ["Widget", "Gadget", "Thingamajig", "Doodad", "Doohickey", "Whatchamacallit"];
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

// Function to generate a random product description
function getRandomProductDescription() {
    const descriptions = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

// Function to generate a random product price between 10 and 100
function getRandomProductPrice() {
    return (Math.random() * 90 + 10).toFixed(2);
}

// Function to generate a random image URL (replace with actual image URLs)
function getRandomImageURL() {
    const imageUrls = [
        "path/to/image1.jpg",
        "path/to/image2.jpg",
        "path/to/image3.jpg",
        // Add more image URLs here
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Generate an array of 50 products
const products = [];
for (let i = 1; i <= 50; i++) {
    const product = {
        id: i,
        name: getRandomProductName(),
        description: getRandomProductDescription(),
        price: getRandomProductPrice(),
        imageURL: getRandomImageURL()
    };
    products.push(product);
}

// Convert the products array to JSON format
const productsJSON = JSON.stringify(products);

console.log(productsJSON);

