const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        const film = JSON.parse(body);
        console.log(`Characters in ${film.title}:`);
        film.characters.forEach(characterUrl => {
            request(characterUrl, function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    const character = JSON.parse(body);
                    console.log(character.name);
                }
            });
        });
    } else {
        console.log("Error fetching movie information.");
    }
});
