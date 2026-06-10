const express = require('express');

const app = express();
console.log(app);

let port = 8080;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

// Basic route handler for all requests
app.use((req, res) => {
    console.log('Request received');
    let code = `
        <h1 style="background-color: skyblue;">Hello, World!</h1>
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Blueberry</li>
            <li>Orange</li>
        </ul>
    `;
    res.send(code);
});


// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/apple', (req, res) => {
    res.send('Apple page');
});

app.get('/banana', (req, res) => {
    res.send('Banana page');
});

app.get('/blueberry', (req, res) => {
    res.send('Blueberry page');
});

// Path parameters
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlstr = `<h1>Welcome to page of @${username}</h1>`;
    res.send(htmlstr);
});

// Query parameters
app.get("/search", (req, res) => {
    let {q} = req.query;
    if (!q) {
        res.send('<h1>Nothing searched</h1>');
    }
    res.send(`<h1>Search results for query ${q}</h1>`);
});

