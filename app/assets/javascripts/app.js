
window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
};

App.Router = Backbone.Router.extend({
    routes: {
    	'' : 'index',
        'style/:id': 'updateMainSection'
    },
    initialize: function() {
    },

    updateMainSection: function(id){
    	if (App.modalView) {
    		App.modalView.hideModal();
    	}
    	//TODO
    	switch(id) {
    	case "0":
			break;
    	case "1":
    	    App.audioView = new audioContentView({ el: "#right-section" });
    		App.audioView.render();
    		break;
    	case "2":
    		break;
    	default:
    		break;
    	}
    	    	
    },
    
    index: function() {
    	App.modalView = new preferencePopover({ el : "#modal-placeholder" });
		App.modalView.render();
    }

});

$(function() {
	//var router = Router();

	var router = new App.Router();
	Backbone.history.start();


});