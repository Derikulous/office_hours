
var tutorView = Backbone.View.extend({
	
	render: function() {

		
		var source   = $("#tutor-tmpl").html();
		var template = Handlebars.compile(source);
		
		this.$el.html(template());

	}
});