function homeLoan(principal) {
    let roi = 9.5;


    /* ..... */
    return function () {
        return roi * principal / 100;
    }
}

let hl_interest = homeLoan(1000000)
console.log(hl_interest())
// let hl_interest = function () {
//     return roi * principal;
// }


function counter() {
    let run = 0;
    return function () {

        run++;
        console.log(run)
    }
}


let increment1 = counter(); // run = 0
let increment2 = counter(); // run = 0
let increment3 = counter(); // run = 0
let increment4 = counter(); // run = 0
let increment5 = counter(); // run = 0
increment1()
increment2()
increment3()
increment4()
increment2()
increment5()

// Example Ecommerce cart

function createCart() {

    let items = [];
    let total = 0;

    function addItem({ item, price }) {
        items.push({ item, price })
        total += price;
        console.log(`Hey you have added ${item} with value ${price} and the total is ${total}`)

    }
    function removeItem(itemname) {

        let index = items.findIndex(obj => obj.item === itemname);
        if (index == -1) return;
        total -= items[index].price;
        console.log(`Hey you have removed ${items[index].item} with value ${items[index].price} and the total is ${total}`)
        items.splice(index, 1)
    }

    function getCart() {
        return [items, total]
    }

    return { addItem, removeItem, getCart }
}
let cart = createCart();

cart.addItem({ item: 'Bat', price: 2000 });

cart.addItem({ item: 'Racket', price: 4000 });

console.log(cart.getCart())

cart.removeItem('Racket');

console.log(cart.getCart())

const EventEmitter = require('events');

// Create a new event emitter
const myEmitter = new EventEmitter();

// Listen for the 'myEvent' event
myEmitter.on('myEvent', (data) => {
    console.log('myEvent was triggered with data:', data);
});

// Emit the 'myEvent' event with some data
myEmitter.emit('myEvent', { foo: 'bar' });
