

Template.keypad.events({
	'click main' : function(){
		Meteor.call('keyPressed', event.target.getAttribute('id'));
	}
});