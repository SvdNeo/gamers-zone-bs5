// let games = [{
//     title: "World of Tanks",
//     desc: "World of Tanks is an armoured warfare-themed multiplayer online game developed by Wargaming, featuring 20th century era combat vehicles. It is built upon a freemium business model where the game is free-to-play, but participants also have the option of paying a fee for use of \"premium\" features."
// },
// {
//     title: "War Thunder",
//     desc: "War Thunder is a free-to-play vehicular combat multiplayer video game developed and published by Gaijin Entertainment. Announced in 2011, it was first released in November 2012 as an open beta with a worldwide release in January 2013; it had its official release on 21 December 2016. "

// }]

let games = []
for (let game of games) {

    newGameCard = document.createElement('div');
    newGameCard.className = 'col-lg-4 col-md-6';
    newGameCard.innerHTML = getTheContent(game);
    document.getElementById('first_row').appendChild(newGameCard);
}

function getTheContent(game) {
    let content = `<div class="card">
            <div class="card-body">
                <div>
                    <span class="card-title">${game.title}</span>
                    <span class="material-symbols-outlined cust_float_right">
                        more_vert
                    </span>
                </div>

                <p class="card-text">${game.desc}</p>
            </div>
        </div>`;
    return content;
}

var myModal = new bootstrap.Modal(document.getElementById('gameModel'), {
    keyboard: false
})
// document.getElementById("game_submit").addEventListener("click", addGame);
function addGame() {
    let game_title = document.getElementById("game_name").value;
    let game_description = document.getElementById("game_description").value

    newGameCard = document.createElement('div');
    newGameCard.className = 'col-lg-4 col-md-6';
    newGameCard.innerHTML = getTheContent({ title: game_title, desc: game_description })
    document.getElementById('first_row').appendChild(newGameCard);

    myModal.hide();

}