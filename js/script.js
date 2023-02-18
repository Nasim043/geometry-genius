// get all calculate btn
const triangle_btn = document.getElementById('btn-triangle');
const rectangle_btn = document.getElementById('btn-rectangle');
const parallelogram_btn = document.getElementById('btn-parallelogram');
const rhombus_btn = document.getElementById('btn-rhombus');
const pentagon_btn = document.getElementById('btn-pentagon');
const ellipse_btn = document.getElementById('btn-ellipse');

// get the input value and validation
let number1;
let number2;
function validateAndCalculate(e) {
  number1 = e.target.parentNode.children[0].value;
  number2 = e.target.parentNode.children[2].value;
  if (number1 == '' || number2 == '' || Number(number1) < 0 || Number(number2) < 0) {
    alert('Please enter a valid number');
    return false;
  } else {
    return true;
    console.log(Number(number1), Number(number2));
    console.log(typeof Number(number1), typeof Number(number2));
    const area = areaOfShapes2(10,12);
    addAreaCalculation(e,area);
  }
}

// add rows in the area calculation
let serial = 1;
function addAreaCalculation(e,area){
  const getTablebody = document.getElementById('table-container'); 
  const shapeName =  e.target.parentNode.parentNode.children[0].innerText;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <th>${serial}</th>
    <td>${shapeName}</td>
    <td>${area}cm<sup>2</sup></td>
    <td><button class="bg-blue text-white py-1 px-2 rounded-md">Covert to m<sup>2</sup></button></td>`;
  getTablebody.appendChild(tr);
  serial++;
}

// Click events for calculate button
triangle_btn.addEventListener('click', function (e) {
  console.log('I am in triangle');
  const isValidate = validateAndCalculate(e);
  if(isValidate){
    const area = areaOfShapes3(Number(number1),Number(number2));
    addAreaCalculation(e,area);
    e.target.parentNode.children[0].value = '';
    e.target.parentNode.children[2].value = '';
  }
});
rectangle_btn.addEventListener('click', function (e) {
  console.log('I am in rectangle');
  const isValidate = validateAndCalculate(e);
  if(isValidate){
    const area = areaOfShapes2(Number(number1),Number(number2));
    addAreaCalculation(e,area);
    e.target.parentNode.children[0].value = '';
    e.target.parentNode.children[2].value = '';
  }
});
parallelogram_btn.addEventListener('click', function (e) {
  console.log('I am in parallelogram');
  const area = areaOfShapes2(10,12);
  addAreaCalculation(e,area);
});
rhombus_btn.addEventListener('click', function (e) {
  console.log('I am in rhombus');
  const area = areaOfShapes3(16,8);
  addAreaCalculation(e,area);
});
pentagon_btn.addEventListener('click', function (e) {
  console.log('I am in pentagon');
  const area = areaOfShapes3(6,10);
  addAreaCalculation(e,area);
});
ellipse_btn.addEventListener('click', function (e) {
  console.log('I am in ellipse');
  const area = areaOfEllipse(10,4);
  addAreaCalculation(e,area);
});