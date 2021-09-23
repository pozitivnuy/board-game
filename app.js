const board = document.querySelector('#board');
const SQUERES_NUMBERS = 600 ;
const colors = ['#f4b6c2 ','#ead5dc','#6497b1', '#009688','#ee4035', 'black','#63ace5'];

for(let i = 0;i<SQUERES_NUMBERS;i++){
  const squere = document.createElement('div');
  squere.classList.add('squere');

  squere.addEventListener('mouseover',() => 
  setColor(squere));
  
  squere.addEventListener('mouseleave',() => 
  removeColor(squere));

  board.append(squere);
}


function setColor(element){
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
}

function removeColor(element){
  const color = getRandomColor();
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
const index = Math.floor(Math.random() * colors.length);
return colors[index];
}