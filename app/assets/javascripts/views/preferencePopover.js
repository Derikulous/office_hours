/*------ CustomerSalesRank View -----*/
var preferencePopover = Backbone.View.extend({
	initialize: function(options) {
		
	},
	
	events: {
		"click .learning-style":  "prepareMainPage",
		"click a": "triggerRoute"
	},
	
	render: function() {
		var styles = { "styles" : [
			{ name:  "Visual", id:  "0"},
			{ name:  "Audio", id: "1"  },
			{ name:  "Tactile", id: "2" },
			{ name:  "Not Sure", id: "3" }
		
		]};
		
		var source   = $("#pref-popover-tmpl").html();
		var template = Handlebars.compile(source);
		
		this.$el.html(template(styles));
		this.$("#myModal").modal("show");
	},
	
	hideModal: function() {
		this.$("#myModal").modal("hide");
	},
	
	triggerRoute: function(ev) {
		ev.preventDefault();
		var index = this.$("a").index($(ev.currentTarget));
		console.log(index);
		App.router.navigate('style/' + index, { trigger: true })
	}
	

	
});
