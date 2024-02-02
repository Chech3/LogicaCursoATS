function calcular(x, y, z) {
  if (x > y && x > z) {
    console.log("X es mayor que Y y Z");
  } else if (y > x && y > z ) {
    console.log("Y es el mayor");
  } else if (z > x && z > y) {
    console.log("z es el mayor");
  }
}

calcular(3, 2, 1);
