// Event Handlers:
// Closures are widely used in event handling to maintain context information.

function setupButton() {
    let count = 0;

    const button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        count++;
        console.log('Button clicked ' + count + ' times.');
        document.getElementById("result").innerHTML = count;

    });
}

setupButton();
