function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 5)); // Output: 32 (2^5)
