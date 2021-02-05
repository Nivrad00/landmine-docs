$(document).ready(function() {
	$('.meetingNotes').css('display', 'none');
	$('.meetingTitle').on('click', toggleVisible);
});

function toggleVisible(e) {
	var notes = $(e.currentTarget).next('.meetingNotes');
	if (notes.css('display') == "none") {
		notes.css('display', 'block');
	} else {
		notes.css('display', 'none');
	}
}