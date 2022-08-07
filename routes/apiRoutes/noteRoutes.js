const router = require('express').Router();
const {createNewNote, deleteNote } = require('../../lib/notes');
const fs = require('fs');


router.get('/notes',(req,res) => {
    // send message to client containing the data/notes
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

// uses the create note function and puts it on the page. 
router.post('/notes', (req, res) => {
    
    res.json(createNewNote(req.body));
    
});

// delete based on unique ids created
router.delete(`/notes/:id`, (req,res) => {
    res.json(deleteNote(req.params.id))
})


module.exports = router; 