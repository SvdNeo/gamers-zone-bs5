// ES6 added the following properties to the Number object:

// EPSILON
// MIN_SAFE_INTEGER
// MAX_SAFE_INTEGER

let x = Number.EPSILON;

let y = Number.MIN_SAFE_INTEGER;

let z = Number.MAX_SAFE_INTEGER;

// ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()

Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false

// Safe integers are all integers from - (253 - 1) to + (253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

