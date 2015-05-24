var db = null;

if (window.openDatabase) {
  db = openDatabase("NoteTest", "1.0", "Sticky App Database", 10000000);
  if (!db) {
    alert("Failed to open database");
  }
}
else {
  alert("Failed to open database, make sure your browser supports HTML5 web storage");
}

function Note() {
  var self = this;

  var note = document.createElement('div');
  note.className = 'note';
  note.addEventListener('mousedown', function(e) {
    return self.onMouseDown(e);
  }, false);
  note.addEventListener('click', function() {
    return self.onNoteClick();
  }, false);
  this.note = note;

  var close = document.createElement('div');
  close.className = 'closebutton';
  close.addEventListener('click', function(e) {
    return self.close(e);
  }, false);
  note.appendChild(close);

  var edit = createElement('div');
  edit.className = 'edit';
  edit.setAttribute('contenteditable', false);
  edit.addEventListener('keyup', function() {
    return self.onKeyUp();
  }, false);
  note.appendChild(edit);
  this.editField = edit;

  var ts = document.createElement('div');
  ts.className = 'timestamp';
  ts.addEventListener('mousedown', function(e) {
    return self.onMouseDown(e);
  }, false);
  note.appendChild(ts);
  this.lastModified = ts;

  document.body.appendChild(note);

  return this;
}

















