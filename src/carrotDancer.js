var carrotDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class="dancer"></span>');
  this.$node = $('<span class="dancer"><img id="carrot" src="img/carrot.gif"></span>');


  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;

};

carrotDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
//this.step();

carrotDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

carrotDancer.prototype.lineUp = function(top, left){
    var styleSettings = {
    top: 500,
    left: left
  };
  this.$node.css(styleSettings);
}
