const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray){
    const note = body; 
    noteArray.push(note);
  
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({note: noteArray}, null, 2)
    );
    
    // return finished code to post route for response
    return note; 
  }

  module.exports = createNewNote;