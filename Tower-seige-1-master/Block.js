class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    stroke(48,22,8);
    this.image = loadImage("box.png");
  }

};
