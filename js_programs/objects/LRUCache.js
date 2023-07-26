// Implementing a simple LRU(Least Recently Used) Cache using an object:

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.keys = [];
    }

    get(key) {
        if (this.cache[key]) {
            // Move accessed key to the front
            this.keys = this.keys.filter(k => k !== key);
            this.keys.unshift(key);
            return this.cache[key];
        }
        return -1; // Key not found
    }

    put(key, value) {
        if (this.keys.length === this.capacity) {
            const removedKey = this.keys.pop();
            delete this.cache[removedKey];
        }
        this.cache[key] = value;
        this.keys = this.keys.filter(k => k !== key);
        this.keys.unshift(key);
    }
}

const cache = new LRUCache(3);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
console.log(cache.get(2)); // Output: "B" (Key 2 is now most recently used)
console.log(cache.get(4)); // Output: -1 (Key 4 is not in the cache)
