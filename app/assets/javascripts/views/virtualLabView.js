var virtualLabView = Backbone.View.extend({
	initialize: function(options) {
		
	},
	
	events: {
		"dragstart .drag-target":  "startDragging",
		"dragstart .drag-target":  "startDragging",
		"drop .drop-target": "drop"
	},
	
	dragData: [
		{  name: "solute-5",
		   displayText: "116.88grams",
		   isCorrect: false,
		   dragMsg: "Oh not quite, your solute makes a solution with a 5m concentration. This is too concentrated!"},
		{  name: "solute-2",
		   displayText: "46.75grams",
		   isCorrect: true,
		   msg: "That is the right solute! Good Job!"},

		{  name: "solute-0",
		   displayText: "12.67grams",
		   isCorrect: false,
		   msg: "Oh not quite, your solute makes a solution with a 0.54m concentration. This is too dilute!"}
	],
	
	dropData: [
		{  name: "beaker",
		   displayText: "Beaker",
		   isCorrect: true,
		   msg: "Congratulation, you got it right!"},
		{  name: "flask",
		   displayText: "Flask",
		   isCorrect: false,
		   msg: "Oh not quite, that is the wrong container"}
	],
	

	startDragging: function(ev) {
		var $draggable = ev.currentTarget();
		this.currentDraggable = $draggable;
		var name = $draggable.data("name");
		
		var draggableData = _.find(this.dragData, function(d) {
			return d.name === name;
		});
		
		_.displayMsg(draggableData);
	},
	
	drop: function(ev) {
		var $droppable = ev.currentTarget();
		
		this.currentDraggable = $draggable;
		var name = $draggable.data("name");
		
		var draggableData = _.find(this.dragData, function(d) {
			return d.name === name;
		});
		
		_.displayMsg(draggableData);
	
	},
	
	
	_displayMsg: function() {
	
	
	
	},
	

	render: function() {
		var contents = { "audioContents" : [
			{ id: "0",
			  sectionTitle:  "Solution",  
			  text: "I am gonna mix this into this blah blah blah",
			  movieLink:  "80156881"
			}
		]};
		
		var source   = $("#audio-content-tmpl").html();
		var template = Handlebars.compile(source);
		
		this.$el.html(template(contents));
	}

	
});
