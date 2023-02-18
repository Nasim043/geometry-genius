// get all calculate btn
const triangle_btn = document.getElementById('btn-triangle');
const rectangle_btn = document.getElementById('btn-rectangle');
const parallelogram_btn = document.getElementById('btn-parallelogram');
const rhombus_btn = document.getElementById('btn-rhombus');
const pentagon_btn = document.getElementById('btn-pentagon');
const ellipse_btn = document.getElementById('btn-ellipse');

// get the input value and validation
function getAndCalculate(e) {
  let number1 = e.target.parentNode.children[0].value;
  let number2 = e.target.parentNode.children[2].value;
  if (number1 == '' || number2 == '' || Number(number1) < 0 || Number(number2) < 0) {
    alert('Please enter a valid number');
  } else {
    console.log(Number(number1), Number(number2));
    console.log(typeof Number(number1), typeof Number(number2));
  }
}
triangle_btn.addEventListener('click', function (e) {
  console.log('I am in triangle');
  getAndCalculate(e);
});
rectangle_btn.addEventListener('click', function (e) {
  console.log('I am in rectangle');
  getAndCalculate(e);
});
parallelogram_btn.addEventListener('click', function (e) {
  console.log('I am in parallelogram');
  const area = areaOfShapes2(10,12);
  console.log(area);
});
rhombus_btn.addEventListener('click', function (e) {
  console.log('I am in rhombus');
  const area = areaOfShapes3(16,8);
  console.log(area);
});
pentagon_btn.addEventListener('click', function (e) {
  console.log('I am in pentagon');
  const area = areaOfShapes3(6,10);
  console.log(area);
});
ellipse_btn.addEventListener('click', function (e) {
  console.log('I am in ellipse');
  const area = areaOfEllipse(10,4);
  console.log(area);
});