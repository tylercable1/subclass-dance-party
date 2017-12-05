

var makeGrowingDancer = function(top, left, timeBetweenSteps) {

  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="growingDancer"></span>');
  this.setPosition(top, left);

};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;



makeGrowingDancer.prototype.step = function(timeBetweenSteps) {
  
  this.oldStep(timeBetweenSteps);

  this.$node.toggle();

};


makeGrowingDancer.prototype.grow = function() {

};