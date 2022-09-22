const AuthorController = require('../controllers/author_controller');

module.exports = app => {
    app.get('/api/Authors', AuthorController.findAllAuthors);
    app.get('/api/Authors/:id', AuthorController.findOneAuthor);
    app.put('/api/Authors/:id', AuthorController.updateAuthor);
    app.post('/api/Authors', AuthorController.createNewAuthor);
    app.delete('/api/Authors/:id', AuthorController.deleteAuthor);
}