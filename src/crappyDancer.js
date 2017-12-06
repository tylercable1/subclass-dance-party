

var makeCrappyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="crappyDancer"></span>');
  this.setPosition(top, left);

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


};


