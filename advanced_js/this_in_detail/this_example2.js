// Character names
var player1Name = "Rahul";
var player2Name = "Priya";

function showFullName() {
    // "this" inside this function will have the value of the window object
    // because the showFullName() function is defined in the global scope, just like the player1Name and player2Name
    console.log(this.player1Name + " " + this.player2Name);
}

var gamersZone = {
    player1Name: "Aryan",
    player2Name: "Neha",
    showFullName: function () {
        // "this" inside the showFullName() method that is defined inside the gamersZone object refers to the gamersZone object
        console.log(this.player1Name + " " + this.player2Name);
    }
};

showFullName(); // Output: Rahul Priya

// window is the object that all global variables and functions are defined on, hence:
window.showFullName(); // Output: Rahul Priya

// "this" inside the showFullName() method that is defined inside the gamersZone object still refers to the gamersZone object, hence:
gamersZone.showFullName(); // Output: Aryan Neha
