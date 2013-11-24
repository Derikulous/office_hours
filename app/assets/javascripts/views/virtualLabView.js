var virtualLabView = Backbone.View.extend({
	initialize: function(options) {
		
	},
	
	events: {
		"dragstart .drag-target":  "startDragging",
		"dragstart .drag-target":  "startDragging",
		"drop .drop-target": "drop",
		"dragover .drop-target" : "allowDrop",
		"click .retry" : "reset"
	},
	
	dragData: [
		{  name: "lab-solute-5",
		   displayText: "116.88grams",
		   isCorrect: false,
		   msg: "Oh not quite, your solute makes a solution with a 5m concentration. This is too concentrated!"},
		{  name: "lab-solute-2",
		   displayText: "46.75grams",
		   isCorrect: true,
		   msg: "That is the right solute! Good Job!"},

		{  name: "lab-solute-0",
		   displayText: "12.67grams",
		   isCorrect: false,
		   msg: "Oh not quite, your solute makes a solution with a 0.54m concentration. This is too dilute!"}
	],
	
	dropData: [
		{  name: "lab-beaker",
		   displayText: "Beaker",
		   isCorrect: true,
		   resultImg: "lab-beaker-result",
		   msg: "Congratulation, you got it right!"},
		{  name: "lab-flask",
		   displayText: "Flask",
		   isCorrect: false,
		   msg: "Oh not quite, that is the wrong container"}
	],

	reset: function(ev) {
		this.currentDraggableData = null;
		this.render();
	
	},

	allowDrop: function(ev) {
		ev.preventDefault();
	},

	startDragging: function(ev) {
		var $draggable = $(ev.currentTarget);
		var imgTag = $draggable.find(".lab-icon").clone();
		imgTag.removeClass("lab-icon");
		ev.originalEvent.dataTransfer.setDragImage(imgTag[0], 100, 100);
				
		var name = $draggable.data("name");
		
		var draggableData = _.find(this.dragData, function(d) {
			return d.name === name;
		});

		this.currentDraggableData = draggableData;

		if(draggableData.isCorrect) {
			this._highLightSection(".drop-section");
			this._displayMsg(draggableData.msg, "alert-success");
		} else {
			this._displayMsg(draggableData.msg, "alert-danger");
		}
		
	},
	
	drop: function(ev) {
		var $droppable = $(ev.currentTarget);
		
	//	this.currentDraggable = ev.dataTransfer.getData("Text");
		var name = $droppable.data("name");
		
		var droppableData = _.find(this.dropData, function(d) {
			return d.name === name;
		});
		
		if (droppableData.isCorrect) {
			if (this.currentDraggableData.isCorrect) {
				$droppable.find("img").attr("src", "./img/" + droppableData.resultImg + ".png"); 
				this._displayMsg(droppableData.msg, "alert-success");
			}
		} else {
			this._displayMsg(droppableData.msg, "alert-danger");
		}
	
	},
	
	
	_displayMsg: function(msg, alertType) {
		this.$(".alert").removeClass("alert-info");
		this.$(".alert").removeClass("alert-success");
		this.$(".alert").removeClass("alert-danger");

		this.$(".alert").addClass(alertType);
		this.$(".alert").html(msg);	
	},
	

	render: function() {
		var contents = { 
			"dragData" : this.dragData,
			"dropData" : this.dropData
		};
		
		var source   = $("#tactile-content-tmpl").html();
		var template = Handlebars.compile(source);
		
		this.$el.html(template(contents));
		this._highLightSection(".drag-section");
	},

	_highLightSection: function(section) {
		var $section = this.$(section);
		$section.addClass("highLight");
		
		_.delay(function() { $section.removeClass("highLight"); }, 5000);
	}
});
