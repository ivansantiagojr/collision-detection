let canvas, ctx; //cria o canvas e o contexto (ctx) no escopo global
// let x = 0;

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

  ctx.strokeStyle = "#ffffff";

  ctx.beginPath();
  ctx.arc(mouseCoords.x, mouseCoords.y, 50, 0, Math.PI * 2);
  ctx.stroke();

  // ctx.fillStyle = '#00ff00'
  // ctx.fillRect(0, 0, 150, 100) //(x, y, width, height)
  // ctx.strokeStyle = '#0000ff'
  // ctx.strokeRect(90, 55, 100, 100)
};

const update = () => {
  // x++;
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
  step();
};

init();
