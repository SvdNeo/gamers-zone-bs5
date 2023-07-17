// listen for load event in the window
window.addEventListener("load", function () {
    // do things after the DOM loads fully
    console.log("Everything is loaded");
    async function myDisplay() {
        let myPromise = new Promise(function (myResolve, myReject) {
            setTimeout(function () { myResolve("This is async"); }, 3000);
        });
        document.getElementById("async_id").innerHTML = await myPromise;
    }

    myDisplay();
});


