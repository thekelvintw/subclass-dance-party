console.log('this file run')


var jumpingDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  //this.left =  jumpingDancer.prototype.jump(this);
  this.step(this);
}


jumpingDancer.prototype = Object.create(dancer.prototype);
jumpingDancer.prototype.constructor = jumpingDancer;


jumpingDancer.prototype.step = function(){
  // var oldStep = dancer.prototype.step.bind(this);
  var oldX = this.left;
  oldStep();
  //this.$node..............
  
setTimeout(this.step.bind(top, oldX), this.timeBetweenSteps);
  this.left = oldX;
  // this.$node.toggle();
};



/*
jumpingDancer.prototype.jump = function(top) {

  // setTimeout(function(this.top = Math.random()*150), this.timeBetweenSteps)

  var styleSettings = {
    top: top,
    //left: left
  };
  this.$node.css(styleSettings);

}
*/


