/* Un profesor necesita saber el porcentaje de mujeres y hombres que tiene en su clase */

function calculo(men, women) {
  const total = men + women;
  const pMen = (men * 100) / total;
  const pWomen = (women * 100) / total;

  console.log(
    "El porcentaje de hombres es: ",
    pMen,
    "El porcentaje de mujeres es: ",
    pWomen,
    "Y el total es", total
  );
}

calculo(100,100);