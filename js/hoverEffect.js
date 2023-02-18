const divs = document.querySelectorAll('.card');

divs.forEach(el => el.addEventListener('mouseenter', event => {
  event.target.style.backgroundColor = getRandomRgbColor();
}));

divs.forEach(el => el.addEventListener('mouseleave', event => {
  event.target.style.backgroundColor = '#FFFFFF';
}));

//  generate random rgb color
function getRandomRgbColor(){
  const red = Math.round(Math.random()*255); 
  const green = Math.round(Math.random()*255); 
  const blue = Math.round(Math.random()*255);
  
  return `rgb(${red},${green},${blue})`;
}