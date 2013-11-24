
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
    		$(".bubble-txt").text("Hi, visual learner!");
    		
			break;
    	case "1":
    	    App.audioView = new audioContentView({ el: "#right-section" });
    		App.audioView.render();
    		$(".bubble-txt").text("Hi, audio learner!");

    		break;
    	case "2":
    		App.virtualLabView = new virtualLabView( { el : "#right-section" });
    		App.virtualLabView.render();
    		$(".bubble-txt").text("Hi, tactile learner!");

    		break;
    	default:
    		break;
    	}
    	$(".drag-txt").on("dragstart", startDraggingTxt);


    },
    
    tutorPage: function() {
    	App.tutorView = new tutorView({ el : "#right-section"});
    	App.tutorView.render();
    },

    index: function() {
		console.log("index!");
    }

});

var currentDrag = "";
var startDraggingTxt = function (ev) {
	$target = $(ev.currentTarget);
	$target.addClass("highligh-text");
	currentDrag = $target.text();
	ev.originalEvent.dataTransfer.setData("text", $target.text());
};

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
		App.notePadView = new notePadView({el : "#notePadSec"});
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
  	$(".drag-txt").on("dragstart", startDraggingTxt);

  	$(".switch-style").click(function(ev) {
  		ev.preventDefault();
  		App.modalView = new preferencePopover({ el : "#modal-placeholder" });
		App.modalView.render();
  	});

});


