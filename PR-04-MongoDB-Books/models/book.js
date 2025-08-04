const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-Fiction', 'Biography', 'Science', 'Romance', 'Mystery', 'Self-help'],
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
  },
  pubDate: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
    required: true,
    enum: ['English', 'Hindi', 'French', 'German', 'Gujarati'],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Book", bookSchema);
