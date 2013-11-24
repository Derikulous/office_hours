
window.App = window.App || {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
};

App.Router = Backbone.Router.extend({
    routes: {
        'style/:id': 'updateMainSection',
        'tutor': 'tutorPage'
    },

    updateMainSection: function(id){
    	if (App.modalView) {
    		App.modalView.hideModal();
    	}
    	//TODO
    	switch(id) {
    	case "0":
    		App.visualView = new visualContentView({ el: "#right-section" });
    		App.visualView.render();
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
    
    tutorPage: function() {
    	App.tutorView = new tutorView({ el : "#right-section"});
    	App.tutorView.render();
    },

    index: function() {
		console.log("index!");
    }

});

var init = function() {
	//var router = Router();
	if(!App.router) {
		App.router = new App.Router();
	}
	if( !Backbone.History.started ) {
		Backbone.history.start();
	}
	reloadPref();
	
	$(".drag-txt").on("dragstart", startDraggingTxt);
	if (!App.nodePadView) {
		App.notePadView = new notePadView({el : "#notePad"});
		App.notePadView.render();
	}
};

var reloadPref = function() {
	if (!App.modalView) {
		App.modalView = new preferencePopover({ el : "#modal-placeholder" });
		App.modalView.render();
	}
}
$(function() {
  	init();
  	
  	$(".switch-style").click(function(ev) {
  		ev.preventDefault();
  		App.modalView = new preferencePopover({ el : "#modal-placeholder" });
		App.modalView.render();
  	});

});


