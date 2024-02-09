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

    const todos = JSON.parse(body);

    const completedTasksByUser = {};

    todos.forEach(todo => {
        if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    });

    console.log(completedTasksByUser);
});
