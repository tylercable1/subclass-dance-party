describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('has lineUp method', function() {
    expect(typeof blinkyDancer.lineUp === 'function').to.be.true;
  });

  it('has danceOff method', function() {
    expect(typeof blinkyDancer.danceOff === 'function').to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});


describe('growingDancer', function () {

  var growingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new makeGrowingDancer(10, 20, timeBetweenSteps);
  });

  it('has lineUp method', function() {
    expect(typeof growingDancer.lineUp === 'function').to.be.true;
  });

  it('has danceOff method', function() {
    expect(typeof growingDancer.danceOff === 'function').to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(growingDancer, 'step');
      expect(growingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(growingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growingDancer.step.callCount).to.be.equal(2);
    });
  });





});



describe('crappyDancer', function () {

  var crappyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crappyDancer = new makeCrappyDancer(10, 20, timeBetweenSteps);
  });

  it('has lineUp method', function() {
    expect(typeof crappyDancer.lineUp === 'function').to.be.true;
  });

  it('does NOT have danceOff method', function() {
    expect(typeof crappyDancer.danceOff === 'function').to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(crappyDancer, 'step');
      expect(crappyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crappyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crappyDancer.step.callCount).to.be.equal(2);
    });
  });





});
