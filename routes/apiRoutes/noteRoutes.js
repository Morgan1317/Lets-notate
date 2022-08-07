const router = require('express').Router();
const fs = require('fs');
var uniqid = require('uniqid'); 


router.get('/notes',(req,res) => {
    // send message to client
    res.json(`${req.method} request recieved to get notes`);


    // Log request to terminal 
    console.info(`${req.method} request recieved to get notes`)
})

router.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add/save notes`);

    const {title, text} = req.body;

      // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
        title,
        text,
        note_id: uniqid(),
        };

   // Obtain existing notes
   fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const parsedNotes = JSON.parse(data);

      // Add a new note
      parsedNotes.push(newNote);

      // Write updated reviews back to the file
      fs.writeFile(
        './db/db.json',
        JSON.stringify(parsedNotes, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated notes!')
      );
    }
  });

  const response = {
    status: 'success',
    body: newNote,
  };

  console.log(response);
  res.json(response);
} else {
  res.json('Error in posting review');
}
});



  
module.exports = router; 