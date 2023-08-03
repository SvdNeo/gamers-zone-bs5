// async function logJSONData() {
//     const response = await fetch("http://example.com/movies.json");
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: "follow", // manual, *follow, error
//         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });


// async function postJSON(data) {
//     try {
//         const response = await fetch("https://example.com/profile", {
//             method: "POST", // or 'PUT'
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         console.log("Success:", result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// const data = { username: "example" };
// postJSON(data);


// async function fetchImage() {
//     try {
//         const response = await fetch("flowers.jpg");
//         if (!response.ok) {
//             throw new Error("Network response was not OK");
//         }
//         const myBlob = await response.blob();
//         myImage.src = URL.createObjectURL(myBlob);
//     } catch (error) {
//         console.error("There has been a problem with your fetch operation:", error);
//     }
// }


// async function fetchImage(request) {
//     try {
//         const response = await fetch(request);
//         if (!response.ok) {
//             throw new Error("Network response was not OK");
//         }
//         const myBlob = await response.blob();
//         myImage.src = URL.createObjectURL(myBlob);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// const myHeaders = new Headers();

// const myRequest = new Request("flowers.jpg", {
//     method: "GET",
//     headers: myHeaders,
//     mode: "cors",
//     cache: "default",
// });

// fetchImage(myRequest);

// const content = "Hello World";
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "text/plain");
// myHeaders.append("Content-Length", content.length.toString());
// myHeaders.append("X-Custom-Header", "ProcessThisImmediately");


// console.log(myHeaders.has("Content-Type")); // true
// console.log(myHeaders.has("Set-Cookie")); // false
// myHeaders.set("Content-Type", "text/html");
// myHeaders.append("X-Custom-Header", "AnotherValue");

// console.log(myHeaders.get("Content-Length")); // 11
// console.log(myHeaders.get("X-Custom-Header")); // ['ProcessThisImmediately', 'AnotherValue']

// myHeaders.delete("X-Custom-Header");
// console.log(myHeaders.get("X-Custom-Header")); // null


// async function fetchJSON(request) {
//     try {
//         const response = await fetch(request);
//         const contentType = response.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//             throw new TypeError("Oops, we haven't got JSON!");
//         }
//         const jsonData = await response.json();
//         // process your data further
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// let myHeaders = new Headers({
//     "Content-Type": "text/xml",
// });

// // or, using an array of arrays:
// myHeaders = new Headers([["Content-Type", "text/xml"]]);

// myHeaders.get("Content-Type"); // should return 'text/xml'


// const request = new Request("https://example.com", {
//     method: "POST",
//     body: '{"foo": "bar"}',
// });

// const url = request.url;
// const method = request.method;
// const credentials = request.credentials;
// const bodyUsed = request.bodyUsed;


// fetch(request)
//     .then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error("Something went wrong on API server!");
//         }
//     })
//     .then((response) => {
//         console.debug(response);
//         // …
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// const image = document.querySelector(".my-image");
// fetch("flowers.jpg")
//     .then((response) => response.blob())
//     .then((blob) => {
//         const objectURL = URL.createObjectURL(blob);
//         image.src = objectURL;
//     });

// // Function to do an Ajax call
// const doAjax = async () => {
//     const response = await fetch("Ajax.php"); // Generate the Response object
//     if (response.ok) {
//         const jsonValue = await response.json(); // Get JSON value from the response body
//         return Promise.resolve(jsonValue);
//     } else {
//         return Promise.reject("*** PHP file not found");
//     }
// };

// // Call the function and output value or error message to console
// doAjax().then(console.log).catch(console.log);


// fetch(request)
//     .then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error("Something went wrong on API server!");
//         }
//     })
//     .then((response) => {
//         console.debug(response);
//         // …
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// // Function to do an Ajax call
// const doAjax = async () => {
//     const response = await fetch("Ajax.php"); // Generate the Response object
//     if (response.ok) {
//         const jsonValue = await response.json(); // Get JSON value from the response body
//         return Promise.resolve(jsonValue);
//     } else {
//         return Promise.reject("*** PHP file not found");
//     }
// };

// // Call the function and output value or error message to console
// doAjax().then(console.log).catch(console.log);




