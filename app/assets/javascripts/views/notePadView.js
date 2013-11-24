var notePadView = Backbone.View.extend({
	initialize: function(options) {
		
	},
	
	events: {
		"dragover #notePad":  "allowDrop",
		"drop #notePad" : "drop",
		"click .delete" : "deleteNote"
	},
	
	allowDrop: function(ev) {
		ev.preventDefault();
		var $droppable = $(ev.currentTarget);
		$(ev.currentTarget).addClass("highLight");
	},
	
	
	drop: function(ev) {
		var $droppable = $(ev.currentTarget);
		$(ev.currentTarget).removeClass("highLight");

		$droppable.append("<li>" + currentDrag + "</li>");
		
		if(localStorage ) {
			var text = localStorage.getItem("notePad");
			text += "<li>" + currentDrag + "</li>";
			localStorage.setItem("notePad", text);
			
		}
		
	},
	
	deleteNote: function() {
		this.$("#notePad").html("");
		localStorage.clear();
	},
	
	render: function() {
		this.$("#notePad").html(localStorage.getItem("notePad"));
	}
});


