const originalGame = {
    title: 'Red Dead Redemption 2',
    platform: 'PlayStation 4',
    genre: 'Action-Adventure',
    developer: 'Rockstar Games',
    releaseYear: 2018,
    ratings: {
        critic: 97,
        user: 92
    },
    characters: [
        {
            name: 'Arthur Morgan',
            occupation: 'Outlaw'
        },
        {
            name: 'John Marston',
            occupation: 'Cowboy'
        }
    ],
    locations: {
        primary: 'New Hanover',
        secondary: 'Lemoyne'
    }
};

// Select specific properties and create a new object with modified values and additional properties
const { title, platform, ratings, characters, ...rest } = originalGame;
const newGame = {
    ...rest,
    title: `${title} - Enhanced Edition`,
    platform: `${platform} Pro`,
    ratings: { ...ratings, critic: ratings.critic + 5 },
    characters: characters.map((character) => ({ ...character, status: 'alive' })),
    locations: { ...originalGame.locations, tertiary: 'West Elizabeth' },
    features: ['Open World', 'Multiplayer']
};

console.log(newGame);
