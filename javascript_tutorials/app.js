console.log("This is from external file")

setTimeout(() => {
    console.log(document.getElementById("fav_games"))
    console.log(document.getElementById("popular_games"))
    console.log(document.querySelector(".fav"))
    console.log(document.querySelectorAll(".card"))
    console.log(document.querySelectorAll(".fav"))
    console.log(document.querySelector(".card"))
    console.log(document.getElementsByClassName("popular_game"))
    console.log(document.getElementsByTagName("section"))

}, 1000)