function ArrayAlike() {
    this.arr = [];
    this.addItem = function (value) {
        this.arr.push(value)
    }
}
if (!ArrayAlike.prototype.includes) {
    ArrayAlike.prototype.includes = function (searchElement, fromIndex) {
        var O = Object(this.arr);
        var len = parseInt(O.length) || 0;
        if (len === 0) return false;

        var n = parseInt(fromIndex) || 0;
        if (n >= len) return false;

        var k;
        if (n >= 0) k = n;
        else k = len + n;

        while (k < len) {
            var currentElement = O[k];
            if (searchElement === currentElement)
                return true;
            k++;
        }

        return false;
    };
}
let arrAlike = new ArrayAlike()
arrAlike.addItem(20)
arrAlike.addItem(30)
arrAlike.addItem(40) // 20,30,40
console.log(arrAlike.includes(30, 1)) // true
console.log(arrAlike.includes(20, 2)) // false
console.log(arrAlike.includes(30)) // true