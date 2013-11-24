
var visualContentView = Backbone.View.extend({
	
	render: function() {

		
		var source   = $("#visual-content-tmpl").html();
		var template = Handlebars.compile(source);
		
		this.$el.html(template(contents));

	}
});