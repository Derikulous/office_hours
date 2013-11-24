
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
    		App.virtualLabView = new virtualLabView( { el : "#right-section" });
    		App.virtualLabView.render();
    		break;
    	default:
    		break;
    	}

    },

    index: function() {

    }

});

var init = function() {
	//var router = Router();
	var router = new App.Router();
	Backbone.history.start();
	reloadPref();
};

var reloadPref = function() {
	App.modalView = new preferencePopover({ el : "#modal-placeholder" });
	App.modalView.render()
}
$(function() {
	init();
});
$(document).on('page:load', reloadPref);
