var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;



makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  
  this.oldStep(timeBetweenSteps);

  this.$node.toggle();

};


makeBlinkyDancer.prototype.lineUp = function() {

  var styleSettings = {
    top: $("body").height() * 0.2
  };
  this.$node.css(styleSettings);

};

makeBlinkyDancer.prototype.danceOff = function() {

  var styleSettings = {
    top: $("body").height() * 0.52,
    left: $("body").width() * 0.5,
  };
  this.$node.css(styleSettings);

};








// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   // return blinkyDancer;
// };

