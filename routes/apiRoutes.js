const router = require('express').Router();
const store = require('../Develop/db/store')

//GET api/notes responds with all notes from the db (database)
router.get('/notes', function(req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//delete start
//router.delete('/api/notes/:id')
module.exports = router;