function foo() { return 1 }


function foo() { return 2 }
foo() === 2
function hi() { }


foo() === 1


function two() { }
two()
function test() { }
function two(a, b) { }

// Run time

function foo() { return 1 }
function foo() { return 2 }
function hi() { }
// function two() { }
function test() { }
function two(a, b) { }


foo() === 1
foo() === 2
foo() === 1
two()

function one(value) {
    return value + 1
}
odds = evens.map(one)


function f(x, y = 7, z = 42) {
    return x + y + z
}
f()