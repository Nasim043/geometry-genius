// calculate area of Triangle, rhombus and pentagon
function areaOfShapes3(a,b){
  const area = 0.5 * a * b;
  if(Number.isInteger(area)){
    return area;
  }
  return area.toFixed(2);
}

// calculate area of rentangle, Parallelogram
function areaOfShapes2(a,b){
  if(Number.isInteger(a * b)){
    return a * b;
  }
  return (a * b).toFixed(2);
}

// calculate area of Ellipse
function areaOfEllipse(a,b){
  let pi = 3.14;
  return (pi * a * b).toFixed(2);
}