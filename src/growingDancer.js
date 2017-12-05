

var makeGrowingDancer = function(top, left, timeBetweenSteps) {

  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="growingDancer"></span>');
  this.setPosition(top, left);

};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.grow = function() {
  this.$node.animate({height: 15, width: 15 },300);
};

makeGrowingDancer.prototype.shrink = function() {
  this.$node.animate({height: 3, width: 3 },300);
};



makeGrowingDancer.prototype.step = function(timeBetweenSteps) {
  
  this.oldStep(timeBetweenSteps);
  this.grow();
  this.shrink();

};

makeGrowingDancer.prototype.lineUp = function() {

  var styleSettings = {
    top: $("body").height() * 0.6
  };
  this.$node.css(styleSettings);

};


// .animate( properties [, duration ] [, easing ] [, complete ] )


// func.call(this, args...)