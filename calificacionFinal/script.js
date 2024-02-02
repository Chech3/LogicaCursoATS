/* Un alumno desea saber su calificacion  en la materia de algoritmos
 dicha calificacion se compone de esta manera
55% del promedio de sus tres calificaciones parciales
30% de la calificacion del examen final
15% de la calificacion de un trabajo final
 */

const calificaciones = [20, 20, 20];

let proCalificacionParcial = 0;
for (let i = 0; i < calificaciones.length; i++) {
  proCalificacionParcial += calificaciones[i]/calificaciones.length * 0.55;
}


function resultados(examenFinal, trabajoFinal) {
  const FinalExamen = examenFinal * 0.3;
  const FinalTrabajo = trabajoFinal * 0.15;
  console.log(proCalificacionParcial + FinalExamen + FinalTrabajo);
}

resultados(10, 10);
