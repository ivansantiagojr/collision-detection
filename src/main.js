import Circle from "./circle"

let canvas, ctx, circle1; //cria o canvas e o contexto (ctx) no escopo global
const NUM_CIRCLES = 40
const objects = []

const mouseCoords = { x: 0, y: 0 };

const onMouseMove = (e) => {
  mouseCoords.x = e.clientX;
  mouseCoords.y = e.clientY;
};

// função para redimensionar canvas para o tamanho da janela
const onResize = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
};

const draw = () => {
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  circle1.draw(ctx);
  objects.forEach(obj => {
    obj.draw(ctx);
  })
};

const update = () => {
  circle1.setPosition(mouseCoords)
};

const step = () => {
  update();
  draw();
  window.requestAnimationFrame(step);
};

//inicia o canvas
const init = () => {
  canvas = document.createElement("canvas"); //cria o canvas
  document.body.appendChild(canvas); //adiciona o canvas no documento
  ctx = canvas.getContext("2d"); //cria contexto para o canvas (da api do canvas)

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", onResize); //redimensiona
  onResize();

  circle1 = new Circle({x: 0, y: 0}, 40)
  for(let i = 0; i < NUM_CIRCLES; i++){
    const circle = new Circle();
    circle.reset(canvas.width, canvas.height)
    objects.push(circle)
  }

  step();
};

init();