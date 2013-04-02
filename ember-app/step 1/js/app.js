var App = Ember.Application.create();

// Step 1
App.Chatroom = Ember.Object.extend({
	id: null,
	name: null,
	description: null,
	chat: []
});

// Ember creates this for us by default, if we don't
App.ApplicationController = Ember.ArrayController.extend({});

App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		var chatrooms = [
			App.Chatroom.create({
				id: 1,
				name: "Ember",
				description: "We discuss Ember.js stuff here"
			}),
			App.Chatroom.create({
				id: 2,
				name: "jQuery",
				description: "Anything jQuery related goes here"
			})
		];
		return chatrooms;
	}
});
// End Step 1