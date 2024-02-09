const request = require('request');

const url = process.argv[2]; // Get the URL from the command line argument

request(url, (error, response) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`code: ${response.statusCode}`);
});
