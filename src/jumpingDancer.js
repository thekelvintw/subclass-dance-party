console.log('this file run')


var jumpingDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  //this.left =  jumpingDancer.prototype.jump(this);
  ////this.step(this);
  var oX = left;
  var oY = top;
  console.log(oX);
  console.log(oY);
  this.counter = 0;
  setInterval(this.jump.bind(this, oX, oY), 500);

};


jumpingDancer.prototype = Object.create(dancer.prototype);
jumpingDancer.prototype.constructor = jumpingDancer;


jumpingDancer.prototype.jump = function(oX, oY){
  // var oldStep = dancer.prototype.step.bind(this);
  //this.$node..............
  // this.$node.toggle();
  var styleSettingsOne = {
    top: oY + 50,
    left: oX
  };
  var styleSettingsTwo = {
    top: oY - 50,
    left: oX
  };
  if(this.counter % 2 === 0){
    this.$node.css(styleSettingsOne);
  }else{
    this.$node.css(styleSettingsTwo);
  }
  this.counter++;
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


