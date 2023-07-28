function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let res = fibonacci(6);
console.log(); // Output: 8 (0, 1, 1, 2, 3, 5, 8)

// n = 6
//call stack = f6 
/*
execution f6 = 5 + 3
f5 = 3 + 2
f4 = 2 + 1 
f3 = 1 +1
f2 = 1 + 0







*/