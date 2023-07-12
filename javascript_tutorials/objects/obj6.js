const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        return this.log[this.log.length - 1];
    }
};

console.log(obj.latest);
// Expected output: "c"

const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// Expected output: Array ["EN", "FA"]
