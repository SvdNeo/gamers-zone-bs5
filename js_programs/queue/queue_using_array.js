class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Return the first element without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue elements
    printQueue() {
        console.log(this.items);
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue(); // Output: [10, 20, 30]

queue.dequeue();
queue.printQueue(); // Output: [20, 30]

console.log(queue.front()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2
