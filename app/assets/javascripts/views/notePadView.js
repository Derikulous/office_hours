var notePadView = Backbone.View.extend({
	initialize: function(options) {
		
	},
	
	events: {
		"dragover":  "allowDrop",
		"drop" : "drop"
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
	
	render: function() {
		this.$el.html(localStorage.getItem("notePad"));
	}
});


