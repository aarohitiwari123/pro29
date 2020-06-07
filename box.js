class Box extends BaseClass {
    constructor(x, y, width, height){
      var options = {
        isStatic : false,
        'restitution':0.5,
        'friction':2.3,
        'density': 3.7
    }
      super(x,y,width,height);
      this.image = loadImage("brick.PNG");
    }
  
  };
  