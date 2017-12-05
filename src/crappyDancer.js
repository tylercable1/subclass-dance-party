

var makeCrappyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="crappyDancer"></span>');
  this.setPosition(top, left);
  // $('.crappyDancer').on('mouseover', function(event) {
  //   // var allCrappyDancers = window.dancers.getElementByClass("crappyDancer");
  //   // for (var i = 0; i < allCrappyDancers.length; i++){
  //   event.target
  //   }
  // });

};

makeCrappyDancer.prototype = Object.create(makeDancer.prototype);
makeCrappyDancer.prototype.constructor = makeCrappyDancer;



makeCrappyDancer.prototype.step = function(timeBetweenSteps) {
  
  this.oldStep(timeBetweenSteps);

};

makeCrappyDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top / 7 + 50,
    left: left / 7 + 50
  };
  this.$node.css(styleSettings);
};

makeCrappyDancer.prototype.lineUp = function(currentTop, currentLeft) {
  // var styleSettings = {
  //   top: currentTop / 2,
  //   left: currentLeft / 2,
  // };
  // this.$node.css(styleSettings);

};


// makeCrappyDancer.prototype.moveAway = function() {
  
//   this.$node.animate({top: +15, left: -15 },300);
// };