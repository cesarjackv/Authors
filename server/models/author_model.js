const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    author: {
        type: String,
        minLength: [ 3, 'Author name must be at least 3 characters or more'],
        required: [
            true,
            'Author name is required'
        ]
    }
});

const Authors = mongoose.model('Authors', AuthorsSchema);

module.exports = Authors;