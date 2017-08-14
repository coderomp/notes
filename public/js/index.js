$(document).ready(function() {

    refreshNotesContainer();

    function refreshNotesContainer(filteredData) {
        $.get('api/notes', function(data) {
            if (filteredData != undefined)
                data = filteredData;

            var notesContainer = $('#notes-container');
            for (var i=0; i < data.length; i++) {
                var newNote = $("<div class='note'>");
                var timestamp = moment(data[i].createdAt).format('M/D/YYYY - h:mm A');
                timestamp = '<span class="timestamp">' + timestamp + ': </span>';
                newNote.html(timestamp + ': ' + data[i].note.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                notesContainer.append(newNote);
            }

            // move the vertical scroll to the bottom
            notesContainer[0].scrollTop = notesContainer[0].scrollHeight;
        });
    }

    $('#add-button').click(function() {
        var note = $('#add-textarea').val().trim();
        $.post('/api/notes', {note: note})
            .done(function(data) {
                var notesContainer = $('#notes-container');
                var newNote = $("<div class='note'>");
                var timestamp = moment(data.createdAt).format('M/D/YYYY - h:mm A');
                timestamp = '<span class="timestamp">' + timestamp + ': </span>';
                newNote.html(timestamp + ': ' + data.note.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                notesContainer.append(newNote);
                $('#add-textarea').val('');
            });
    });

    $('#find-button').click(function() {
        var find = $('#find-textarea').val().trim();
        $.post('/api/find-notes', {find: find})
            .done(function(data) {
                $('#notes-container').empty();
                refreshNotesContainer(data);
                $('#find-textarea').val('');
            });
    });
});