const fs = require('fs');
const path = require('path')
const uniqid = require('uniqid'); 
// const noteData = require('../db/db.json')

function createNewNote(body){
    const {title, text} = body;

    // If all the required properties are present
  if (title && text) {
      // Variable for the object we will save
      const newNote = {
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
        notesArray.push(newNote);

        fs.writeFileSync(
          path.join(__dirname,'../db/db.json'),
          JSON.stringify(notesArray,null,4)
          
        );
        console.info('sucessfully added a note')
      }
    })
  }
};

function deleteNote(id){
  // if not the notes id then save it. 
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const notesArray = JSON.parse(data);

      const result = notesArray.filter(note => note.id !== id);
      // Add a new review
      

      fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify(result,null,4)
        
      );
      
    }
  });
}

  module.exports = {createNewNote, deleteNote};