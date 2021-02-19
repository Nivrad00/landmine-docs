$(document).ready(function() {
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
			$(`<h3>${line[0]}</h3>`).appendTo('#meetingLog');
		
		$("<div/>").addClass("meetingTitle")
			.text(line[1])
			.on('click', toggleVisible)
			.appendTo('#meetingLog');
		
		$("<div/>").addClass("meetingNotes")
			.css('display', 'none')
			.append(
				$("<p/>").text(line[2]).addClass("rawNotes")
			)
			.appendTo('#meetingLog');
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