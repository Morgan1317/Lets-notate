const fs = require('fs');
const path = require('path')
// npm module to create unique id's
const uniqid = require('uniqid'); 

// function to create a new note
function createNewNote(body){
  const {title, text} = body;
  // if a title and text are input a new object will be formed with a unique id 
  if (title && text) {
      // Variable for the new note object we will save
      const newNote = {
      title,
      text,
      id: uniqid(),
      }; 

    // Obtain existing notes we have 
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const notesArray = JSON.parse(data);

        // push new note to old ones 
        notesArray.push(newNote);

        // write our new notesArray containing new note to the json file
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
  // looks at all of our files 
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const notesArray = JSON.parse(data);
      // checks id that is coming in based on the delete button click and filters it to return all other notes, besides the one with our unique id
      const result = notesArray.filter(note => note.id !== id);
      // Add a new review
      
      // rewrites the json file with the new result, that no longer contains the note associated with the id of the delete button clicked. 
      fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify(result,null,4)
        
      );
      
    }
  });
}

  module.exports = {createNewNote, deleteNote};