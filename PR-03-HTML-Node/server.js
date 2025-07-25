const express = require('express');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');
server.use(express.static('public'));



server.get('/', (req, res) => {
    res.render('index');
});
server.get('/index.ejs', (req, res) => {
    res.render('index');
});
server.get('/chart.ejs', (req, res) => {
    res.render('chart');
});
server.get('/form-basic.ejs', (req, res) => {
    res.render('form-basic');
});
server.get('/authantication-login.ejs', (req, res) => {
    res.render('authantication-login');
});
server.get('/table.ejs', (req, res) => {
    res.render('table');
});
server.get('/authantication-register.ejs', (req, res) => {
    res.render('authantication-register');
});


server.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});
