const express = require('express');


const app = express();


app.get('/write', (req, res) => {
    res.sendFile(__dirname + '/write.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server is running');
});