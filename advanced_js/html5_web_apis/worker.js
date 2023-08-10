onmessage = event => {
    const message = event.data;
    postMessage(`Worker received: ${message}`); // Send a message back to the main thread
};
