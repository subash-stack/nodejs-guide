const fs = require('fs');
const chalk = require('chalk');
const loadNotes = () => {
  try {
    const bufferNotes = fs.readFileSync("notes.json");
    const parserNotes = JSON.parse(bufferNotes.toString());
    return parserNotes;
  } catch (e) {
    console.log(e);

    return [];
  }
};
const saveNotes=(notes)=>{
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
}
const addNote=(title,body)=> {
    const notes = loadNotes();
    const duplicateTitle = notes.find((note) => note.title === title);
    if (!duplicateTitle) {
        notes.push({
          title,
          body,
        });
        saveNotes(notes); 
        console.log(chalk.green.inverse("Notes added successfully"));
        
    } else {
        console.log(chalk.red.inverse("Notes title already taken"));
        
    }
  

    
}
const removeNote=(title)=>{
    const notes = loadNotes();
    const filterNote = notes.filter((note) => note.title !== title);
    if (notes.length > filterNote.length) {
        console.log(chalk.green.inverse.bold("Note removed!"));
        saveNotes(filterNote);

    } else {
        console.log(chalk.red.inverse.bold("No note removed!"));
    }
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.white.bgGreen("Notes list:"));
    notes.forEach((note) => console.log(note.title));
}
const readNote = (title) => {
    const notes = loadNotes();
    const getNote = notes.find((note) => note.title === title);
    return getNote
      ? console.log(chalk.green(getNote.title), getNote.body)
      : console.log(chalk.red.bold("No note found"));
  
}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
};