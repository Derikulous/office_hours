var audioContentView = Backbone.View.extend({
	initialize: function(options) {
		
	},
	
	events: {
		"click .learning-style":  "prepareMainPage"
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
