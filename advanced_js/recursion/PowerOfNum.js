function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
let result = power(2, 5)
console.log(result); // Output: 32 (2^5)

// Call stack 32
//2 * 16
//2 * 8
//2 * 4
//2 * 2
//2 * 1