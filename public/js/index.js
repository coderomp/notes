$(document).ready(function() {
    $.get('api/notes', function(data) {
        var notesContainer = $('#notes-container');
        for (var i=0; i < data.length; i++) {
            var newNote = $("<div class='note'>");
            newNote.text(data[i].note);
            console.log(data[i]);
            notesContainer.append(newNote);
        }
    });
});