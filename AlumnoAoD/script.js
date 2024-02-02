function calificaciones(n1, n2, n3) {
  const promedio = (n1 + n2 + n3) / 3;

  if (promedio >= 10) {
    console.log("usted aprobo la materia con: ", promedio);
  } else if (promedio < 10) {
    console.log("usted no aprobo y su nota fue: ", promedio);
  } else {
    console.log("Ha colocado algun dato erronoamente");
  }
}

calificaciones(9, 12, 5);
