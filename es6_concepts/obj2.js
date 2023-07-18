let obj = {
    foo: "bar",
    ["baz" + test()]: 42,
    ["Hi" + test() * 2]: "Oops.!"
}

function test() { return 10 }

console.log(obj.Hi20)
let getASTNode = () => {
    return { op: 10, lhs: 20, test: { name: "TEST", obj2: { city: "Bengaluru" } } }
}
var { op, lhs: test2, rhs } = getASTNode()
// var { city } = getASTNode()

console.log(op, test2, rhs)
