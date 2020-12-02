//select the elemtns on the page- canvas shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 30;
//setup our canvas for drawing

//const width= canvas.width;
//const height= canvas.height;
//below is short way to above  code 
const{ width, height } = canvas;

let x =Math.floor (Math.random () * width);
let y =Math.floor (Math.random () * height);
//create random x nad y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = ` hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//write a draw function 
function draw ({key}){
  hue += 1;
  ctx.strokeStyle = ` hsl(${Math.random() * 360}, 100%, 50%)`;
console.log (key);
ctx.beginPath();
ctx.moveTo (x, y);

switch (key) {
  case 'ArrowUp':
  y -= MOVE_AMOUNT;
  break;
  case 'ArrowDown':
  y += MOVE_AMOUNT;
  break;
  case 'ArrowRight':
  x += MOVE_AMOUNT;
  break;
  case 'ArrowLeft':
  x -= MOVE_AMOUNT;
  break;
  default:
  break;
}

ctx.lineTo(x, y);
ctx.stroke();
}

//write a handler for the keys
function handleKey (e) {
  e.preventDefault();
  draw({ key: e.key});
  if (e.key.includes ('Arrow')){
    console.log(e.key);
  console.log('HANDLE KEY');
  }
}

//clear/shake funciton 
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
  canvas.classList.add('shake');
  canvas.addEventListener('animationend', function() 
  {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },{once: ture});
}

//listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);