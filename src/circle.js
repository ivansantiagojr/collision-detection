const RADIUS_RANGE = {
  min: 3,
  max: 47
}
class Circle {
  constructor(pos = {x: 0, y: 0}, r = 1, color = '#ffffff'){
    this.pos = pos;
    this.r = r;
    this.color = color;
  };

  setPosition = pos => {this.pos = pos}

  setRadius = r => {this.r = r}

  reset = (width, height) => {
    this.setPosition({
    x: Math.random() * width,
    y: Math.random() * height
  })
    this.setRadius(
      RADIUS_RANGE.min + Math.random() * RADIUS_RANGE.max
      )
  }
  
  draw = ctx => {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  }
};

export default Circle