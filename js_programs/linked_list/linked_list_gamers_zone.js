class GamerNode {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        this.next = null;
    }
}

class GamersLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new gamer at the end of the linked list
    addGamer(name, score) {
        const newGamer = new GamerNode(name, score);

        if (!this.head) {
            this.head = newGamer;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newGamer;
        }
    }

    // Method to display all gamers in the linked list
    displayGamers() {
        let current = this.head;
        while (current) {
            console.log(`Name: ${current.name}, Score: ${current.score}`);
            current = current.next;
        }
    }
}
const gamersList = new GamersLinkedList();

gamersList.addGamer("Player1", 100);
gamersList.addGamer("Player2", 85);
gamersList.addGamer("Player3", 120);
gamersList.addGamer("Player4", 75);

gamersList.displayGamers();
