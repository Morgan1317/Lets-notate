const router = require('express').Router();

// our functions to add and delele notes
const {createNewNote, deleteNote } = require('../../lib/notes');
const fs = require('fs');


router.get('/notes',(req,res) => {
    // send message to client containing the data/notes, updates with changes to the notes Array
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const notesArray = JSON.parse(data);
          res.json(notesArray);
        };
    });

})

// uses the create note function and adds it to the json file. Then responds with the json data
router.post('/notes', (req, res) => {
    res.json(createNewNote(req.body));
});

// delete based on unique ids created, when user clicks the trash can it triggers this delete response
router.delete('/notes/:id', (req,res) => {
    res.json(deleteNote(req.params.id))
})


module.exports = router; 