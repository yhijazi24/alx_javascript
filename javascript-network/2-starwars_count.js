const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    
    if (response.statusCode !== 200) {
        console.error(`Error: ${response.statusCode}`);
        return;
    }

    const films = JSON.parse(body).results;
    const characterId = '18'; 

    const moviesWithWedge = films.filter(movie =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log(moviesWithWedge.length);
});
