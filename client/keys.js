

Template.keypad.events({
	'click button' : function(){
		Meteor.call('keyPressed', event.target.getAttribute('id'));
	}
});