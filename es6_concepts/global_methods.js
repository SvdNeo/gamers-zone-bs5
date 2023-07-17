// ES6 added 2 new global number methods:

// isFinite()
// isNaN()

Number.isFinite(10 / 0);       // returns false
isFinite(10 / 1);       // returns true

isNaN("Hello");       // returns true