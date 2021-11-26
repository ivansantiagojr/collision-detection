const RADIUS_RANGE = {
  min: 3,
  max: 47
}

const OVERLAPPING_COLOR = '#ff0000'
class Circle {
  constructor(pos = {x: 0, y: 0}, r = 1, color = '#ffffff'){
    this.pos = pos;
    this.r = r;
    this.color = color;
    this.overlapping = false
  };

  setPosition = pos => {this.pos = pos}

  setRadius = r => {this.r = r}

  setOverlapping = val => {
    this.overlapping = val
  }

  overlaps = circle => {
    const dx = circle.pos.x - this.pos.x; //calculando a distância entre as coordenadas x
    const dy = circle.pos.y - this.pos.y //calculanto a distância entre as coordenadas y 
    
    return Math.sqrt(dx * dx + dy * dy) <= this.r + circle.r //distância entre circles <= soma dos raios dos circles
  }

  reset = (width, height) => {
    this.setPosition({
    x: Math.random() * width,
    y: Math.random() * height
  })
    this.setRadius(
      RADIUS_RANGE.min + Math.random() * RADIUS_RANGE.max
      )
  }
  
  update = () => {
    this.overlapping = false
  }

  draw = ctx => {
    ctx.strokeStyle = this.overlapping ? OVERLAPPING_COLOR : this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  }
};

export default Circle