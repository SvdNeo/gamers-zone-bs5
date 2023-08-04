//1. Function to calculate the nth Fibonacci number using memoization
function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }

    if (n <= 2) {
        return 1;
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Test the function
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610


//2. Factorial function with memoization
function factorial(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    memo[n] = n * factorial(n - 1, memo);
    return memo[n];
}

console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800
console.log(factorial(15)); // Output: 1307674368000

// 3. Caching expensive function calls
// Simulating an expensive API request
function fetchDataFromAPI(param) {
    console.log(`Fetching data for param: ${param}`);
    // Pretend this is an expensive API call, returning some data
    return `Data for ${param}`;
}

// Memoized wrapper for fetchDataFromAPI
function memoizedFetchData(param, memo = {}) {
    if (param in memo) {
        console.log(`Returning cached data for param: ${param}`);
        return memo[param];
    }

    memo[param] = fetchDataFromAPI(param);
    return memo[param];
}

console.log(memoizedFetchData('abc')); // Output: Fetching data for param: abc | Data for abc
console.log(memoizedFetchData('def')); // Output: Fetching data for param: def | Data for def
console.log(memoizedFetchData('abc')); // Output: Returning cached data for param: abc | Data for abc

// 4. Memoizing a recursive function
function powerOf(base, n, memo = {}) {
    const key = `${base}:${n}`;
    if (key in memo) {
        return memo[key];
    }

    if (n === 0) {
        return 1;
    }

    memo[key] = base * powerOf(base, n - 1, memo);
    return memo[key];
}

console.log(powerOf(2, 5)); // Output: 32
console.log(powerOf(3, 4)); // Output: 81
console.log(powerOf(5, 3)); // Output: 125
console.log(powerOf(2, 10)); // Output: 1024
