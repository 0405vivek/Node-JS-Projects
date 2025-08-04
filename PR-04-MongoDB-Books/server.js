const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const Book = require('./models/book');
const connectDatabase = require('./collactiondb/collactiondb');
const upload = require('./middleware/uplodaimage');

const server = express();

const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

connectDatabase();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use('/uploads', express.static('uploads'));
server.set('view engine', 'ejs');

server.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.render('index', { books });
  } catch (err) {
    console.error('Failed to fetch books:', err);
    res.status(500).send('Error loading books');
  }
});

server.get('/add', (req, res) => {
  res.render('add-book.ejs');
});

server.post('/add-book', upload.single('coverImage'), async (req, res) => {
  try {
    const { title, author, category, publisher, pubDate, language, price, description, rating } = req.body;
    const coverImageUrl = req.file ? '/uploads/' + req.file.filename : '';

    const newBook = new Book({
      title,
      author,
      category,
      publisher,
      pubDate,
      language,
      price,
      coverImageUrl,
      description,
      rating: rating || null
    });

    await newBook.save();
    res.redirect('/');
  } catch (err) {
    console.error('Error saving book:', err);
    res.status(500).send('Failed to add book');
  }
});

server.get('/edit/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.render('edit', { book });
  } catch (err) {
    console.error('Error loading book for edit:', err);
    res.status(500).send('Failed to load edit form');
  }
});

server.post('/edit/:id', upload.single('coverImage'), async (req, res) => {
  try {
    const { title, author, category, publisher, pubDate, language, price, description, rating } = req.body;
    const coverImageUrl = req.file ? '/uploads/' + req.file.filename : undefined;

    const updatedBook = {
      title,
      author,
      category,
      publisher,
      pubDate,
      language,
      price,
      description,
      rating: rating || null
    };

    if (coverImageUrl) {
      updatedBook.coverImageUrl = coverImageUrl;
    }

    await Book.findByIdAndUpdate(req.params.id, updatedBook);
    res.redirect('/');
  } catch (err) {
    console.error('Error updating book:', err);
    res.status(500).send('Failed to update book');
  }
});

server.post('/delete/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

server.listen(8008, () => {
  console.log('📚 Server running at: http://localhost:8008');
});
