//Tres personas invierten cantidades distintas, calcular el porcentaje de cada uno segun lo que dan
//P*100 / total

function calculo(n1, n2, n3) {
const total = n1+n2+n3
  const persona1 = (n1 * 100) / total;
  const persona2 = (n2 * 100) / total;
  const persona3 = (n3 * 100) / total;

   const resultado1 = persona1.toFixed(2)
    const resultado2 = persona2.toFixed(2)
    const resultado3 = persona3.toFixed(2)

  console.log(
    "El porcentaje de la primera persona es: ",
    resultado1,
    "El porcentaje de la segunda es 2 tiene: ",
    resultado2,
    "la tercera tiene : ",
    resultado3
  );
}

calculo(10, 10, 10);
