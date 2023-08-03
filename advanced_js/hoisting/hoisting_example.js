var college = "IIT Delhi";
console.log(college)

getMyBranch()
function getMyBranch() {

    var branch = "Computer Engineering"
    console.log(branch)
}


getMyBranch() // TypeError -> Uncaught TypeError: getMyBranch is not a function
var getMyBranch = function () {

    var branch = "Computer Engineering"
    console.log(branch)
}


getMyBranch() // ReferenceError -> Uncaught ReferenceError: getMyBranch is not defined
let getMyBranch = function () {

    var branch = "Computer Engineering"
    console.log(branch)
}
let test;
console.log(test)


// const playerCountry;
console.log(playerCountry) // Uncaught SyntaxError: Missing initializer in const declaration

console.log(favPlayer) // Uncaught ReferenceError: favPlayer is not defined
const favPlayer = "M S D";