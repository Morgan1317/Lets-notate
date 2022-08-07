const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const noteData = require('../../db/db.json')


router.get('/notes',(req,res) => {
    res.json(noteData);
    
    // Log request to terminal 
    console.info(`${req.method} request recieved to get notes`)
})

router.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add/save notes`);
    const note = createNewNote(req.body);
    res.json(note);
    
});


module.exports = router; 