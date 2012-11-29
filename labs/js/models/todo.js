var app = app || {};

(function() {
	'use strict';

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	// you'll want to extend the Backbone model here
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// define the default attributes
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function() {
			this.save({
				completed: !this.get('completed')
			});
		}

	});
	
}());
