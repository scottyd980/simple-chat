var App = Ember.Application.create();

// Step 1
App.Chatroom = Ember.Object.extend({
	id: null,
	name: null,
	description: null,
	chat: []
});

App.Chat = Ember.Object.extend({
	user: null,
	message: null
});

// Ember creates this for us by default, if we don't
App.ApplicationController = Ember.ArrayController.extend({});

App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		return App.Chatroom.findAll();
	}
});
// End Step 1

// Step 2
App.Chatrooms = [
	App.Chatroom.create({
		id: 1,
		name: "Ember",
		description: "We discuss Ember.js stuff here",
		chat: [
			App.Chat.create({
				user: "Scott",
				message: "Hello world!"
			}),
			App.Chat.create({
				user: "Tom",
				message: "Hey there!"
			})
		]
	}),
	App.Chatroom.create({
		id: 2,
		name: "jQuery",
		description: "Anything jQuery related goes here",
		chat: []
	})
];

App.Chatroom.reopenClass({
	findAll: function() {
		return App.Chatrooms;
	},
	find: function(roomId) {
		return App.Chatrooms[roomId - 1];
	}
});

App.Router.map(function() {
	this.resource('chatroom', {path: '/chatroom/:chatroom_id'});
});

App.ChatroomRoute = Ember.Route.extend({
	model: function(params) {
		return App.Chatroom.find(params.chatroom_id);
	}
});
// End Step 2