const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
    handler: function (argv) {
    notes.addNote(argv.title,argv.body)
  },
});

yargs.command({
  command: "remove",
  describe: "Remove notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
      notes.removeNote(argv.title)
  },
});
// List
yargs.command({
  command: "list",
  describe: "List notes",
  handler(){
    notes.listNotes();
  },
});
// Read
yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});
yargs.parse();



