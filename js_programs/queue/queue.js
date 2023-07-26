class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Add element to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (!this.front) {
            return "Queue is empty";
        }

        const removedValue = this.front.value;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }

        return removedValue;
    }

    // Return the first element without removing it
    frontValue() {
        return this.front ? this.front.value : "Queue is empty";
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === null;
    }

    // Get the size of the queue
    size() {
        let count = 0;
        let current = this.front;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Print the queue elements
    printQueue() {
        const elements = [];
        let current = this.front;
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements);
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

console.log(queue.frontValue()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2
