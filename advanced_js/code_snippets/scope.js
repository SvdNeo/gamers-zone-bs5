let college = "IIT Delhi";

function getMyBranch() {
    var branch = "Computer Engineering"

    console.log(branch)
    {
        let section = "D"
        console.log(section)
    }
    // console.log(section)// ReferenceError : block scope
}

getMyBranch()
// console.log(branch) // ReferenceError : Function Scope
console.log(college)