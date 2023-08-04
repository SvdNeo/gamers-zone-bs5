const originalGame = {
    title: 'The Witcher 3: Wild Hunt',
    platform: 'PlayStation 4',
    genre: 'Action RPG',
    developer: 'CD Projekt Red',
    releaseYear: 2015,
    ratings: {
        critic: 93,
        user: 92
    },
    characters: [
        {
            name: 'Geralt of Rivia',
            profession: 'Witcher'
        },
        {
            name: 'Yennefer of Vengerberg',
            profession: 'Sorceress'
        },
        {
            name: 'Ciri',
            profession: 'Princess of Cintra'
        }
    ],
    DLCs: [
        {
            name: 'Hearts of Stone',
            releaseYear: 2015
        },
        {
            name: 'Blood and Wine',
            releaseYear: 2016
        }
    ]
};

// Select specific properties and create a new object with modifications
const { title, platform, ratings, characters, ...rest } = originalGame;
const newGame = {
    ...rest,
    title: `${title} (Complete Edition)`,
    platform: platform.toUpperCase(),
    ratings: { ...ratings },
    characters: characters.map((character) => ({
        ...character,
        profession: character.profession.toUpperCase()
    })),
    DLCs: originalGame.DLCs.map((dlc) => ({
        ...dlc,
        releaseYear: dlc.releaseYear + 1
    }))
};

console.log(newGame);
