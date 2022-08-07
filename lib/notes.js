const fs = require('fs');
const path = require('path')
const uniqid = require('uniqid'); 
// const noteData = require('../db/db.json')

function createNewNote(body){
    const {title, text, id} = body;

    // If all the required properties are present
  if (title && text && id) {
      // Variable for the object we will save
      const activeNote = {
      title,
      text,
      id: uniqid(),
      };

    // Obtain existing notes
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const notesArray = JSON.parse(data);

        // Add a new review
        notesArray.push(activeNote);

        // Write updated notes back to the file
        fs.writeFile(
          './db/db.json',
          JSON.stringify(notesArray, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated note!')
        );
        // fs.writeFileSync(
        //   path.join(__dirname,'../db/db.json'),
        //   JSON.stringify(notesArray,null,4)
        // );
      }
    })
  }
  
};

  module.exports = createNewNote;