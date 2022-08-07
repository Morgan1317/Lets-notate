const router = require('express').Router();
const createNewNote = require('../../lib/notes');
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
    // Log request to terminal 
    console.info(`${req.method} request recieved to get notes`)
})

router.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add/save notes`);

    createNewNote(req.body);
    
    res.json();
    
});


module.exports = router; 