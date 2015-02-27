// Fix polymer events in FF / Safari
// ref https://github.com/pfafman/meteor-polymer-event-test/issues/1#issuecomment-68035994
var noOp = function(){};

Template.keypad.rendered = function(){
  $(document).on('keyup keydown scroll', noOp);
};