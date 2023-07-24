let games = [{
    title: "World of Tanks",
    id: 1,
    desc: "World of Tanks is an armoured warfare-themed multiplayer online game developed by Wargaming, featuring 20th century era combat vehicles. It is built upon a freemium business model where the game is free-to-play, but participants also have the option of paying a fee for use of \"premium\" features."
},
{
    title: "War Thunder",
    id: 2,
    desc: "War Thunder is a free-to-play vehicular combat multiplayer video game developed and published by Gaijin Entertainment. Announced in 2011, it was first released in November 2012 as an open beta with a worldwide release in January 2013; it had its official release on 21 December 2016. "

}]

// let games = []
let nextId = 3;
let currentEditGame = {};
function getTheContent(game) {
    let content = `<div class="card">
            <div class="card-body">
                <div>
                    <span class="card-title">${game.title}</span>
                    <span class="material-symbols-outlined cust_float_right" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        more_vert
                    </span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" onclick="editGame(${game.id})">Edit</a></li>
                        <li><a class="dropdown-item" href="#" onclick="deleteGame(${game.id})">Delete</a></li>
                    </ul>
                </div>

                <p class="card-text">${game.desc}</p>
            </div>
        </div>`;
    return content;
}
let addGameButton = true;
let editGameButton = false;
var myModal = new bootstrap.Modal(document.getElementById('gameModel'), {
    keyboard: false
})
document.getElementById('gameModel').addEventListener('show.bs.modal', function (event) {
    if (event.target.id == 'gameModel' && !editGameButton) {
        editGameButton = false;
        addGameButton = true;
    }
    document.getElementById("game_submit").style.display = addGameButton ? "block" : "none";
    document.getElementById("game_update").style.display = editGameButton ? "block" : "none";
})
document.getElementById('gameModel').addEventListener('hide.bs.modal', function (event) {
    editGameButton = false;
    addGameButton = false;
    document.getElementById("game_name").value = "";
    document.getElementById("game_description").value = "";
})
// document.getElementById("game_submit").addEventListener("click", addGame);
function addGame() {

    let game_title = document.getElementById("game_name").value.trim();
    let game_description = document.getElementById("game_description").value.trim();
    if (game_title.length == 0 || game_description.length == 0) {
        alert("Mandatory Inputs")
        return;
    }
    nextId++;
    games.push({ title: game_title, desc: game_description, id: nextId })

    newGameCard = document.createElement('div');
    newGameCard.className = 'col-lg-4 col-md-6';
    newGameCard.innerHTML = getTheContent({ title: game_title, desc: game_description, id: nextId })
    document.getElementById('first_row').appendChild(newGameCard);

    myModal.hide();
    document.getElementById("game_name").value = "";
    document.getElementById("game_description").value = "";


}
displayGames();
function displayGames() {
    document.getElementById('first_row').innerHTML = "";

    for (let game of games) {
        newGameCard = document.createElement('div');
        newGameCard.className = 'col-lg-4 col-md-6';
        newGameCard.innerHTML = getTheContent(game);
        document.getElementById('first_row').appendChild(newGameCard);
    }

}

function deleteGame(id) {
    games = games.filter(game => game.id != id);
    displayGames();

}
function editGame(id) {
    currentEditGame = games.find(game => game.id == id);
    console.log(currentEditGame);
    document.getElementById("game_name").value = currentEditGame.title
    document.getElementById("game_description").value = currentEditGame.desc
    addGameButton = false;
    editGameButton = true;

    myModal.show();
}

function updateGame() {
    games.forEach(game => {
        if (game.id == currentEditGame.id) {
            game.title = document.getElementById("game_name").value;
            game.desc = document.getElementById("game_description").value
        }
    });
    myModal.hide();
    displayGames();
}