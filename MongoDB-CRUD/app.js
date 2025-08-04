const express = require('express');
const app = express();
const connectDB = require('./database/database'); // Import the database connection
const Book = require('./models/book'); // Corrected path

 // Connect to MongoDB

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('index', { books }); // Send books to index.ejs
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.redirect('/');
});

app.listen(8010, () => {
    connectDB();
    console.log('Server is running on http://localhost:8010');
});
