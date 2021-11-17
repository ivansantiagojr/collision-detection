class Circle {
  constructor(pos = {x: 0, y: 0}, r = 1, color = '#ffffff'){
    this.pos = pos;
    this.r = r;
    this.color = color;
  };

  setPosition = pos => {this.pos = pos}
  
  draw = ctx => {
    ctx.strokeStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  }
};

export default Circle