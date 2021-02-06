//select the elements on the page canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 30;


//set up canavs drawing
//make a variable called height and width from the same property on our canvas
// const width = canvas.width;
// const height = canvas.height;
const {width, height} = canvas;

//create a random x and y starting points on the canvas

let y  = Math.floor(Math.random()* height);
let x  = Math.floor(Math.random()* width);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x,y);
ctx.stroke();

//write a draw function 
function draw({key}){
  //increment the hue
   ctx.strokeStyle = `hsl(${Math.random()* 360}, 100%, 50%)`;
   console.log(key);
   ctx.beginPath();
   ctx.moveTo(x,y);

   switch(key){
     case 'ArrowUp':
      y = y - MOVE_AMOUNT;
     break;
     case 'ArrowDown':
      y = y +  MOVE_AMOUNT;
     break;
     case 'ArrowRight':
      x = x + MOVE_AMOUNT;
     break;
     case 'ArrowLeft':
      x = x - MOVE_AMOUNT;
      break;
     default: break;
   }

   ctx.lineTo(x,y);
   ctx.stroke();
}


//write a handler for the keys

function handleKey(event){
  if (event.key.includes('Arrow')){
    event.preventDefault();
    draw({key: event.key})
  }
}

window.addEventListener("keydown", handleKey);

//clear / shake function 
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}


shakeBtn.addEventListener("click", clearCanvas);






