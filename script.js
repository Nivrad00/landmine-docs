$(document).ready(function() {
	$('.meetingNotes').css('display', 'none');
	$('.meetingTitle').on('click', toggleVisible);
	
	$.get({
	  url: "meeting-notes.csv",
	  dataType: "text",       
	  success: response => {
		let data = $.csv.toArrays(response);
		generateMeetingNotes(data);
	  }   
	});
});

function generateMeetingNotes(data) {
	for (let line of data) {
		if (line[0].length > 0)
			$(`<h3>${line[0]}</h3>`).appendTo('meetingLog')
		
		$("<div/>", {
			"class": "meetingTitle",
			text: line[1]
		}).appendTo('meetingLog');
		
		$("<div/>", {
			"class": "meetingNotes",
			text: line[2]
		}).appendTo('meetingLog');
	}
}
	
function toggleVisible(e) {
	var notes = $(e.currentTarget).next('.meetingNotes');
	if (notes.css('display') == "none") {
		notes.css('display', 'block');
	} else {
		notes.css('display', 'none');
	}
}