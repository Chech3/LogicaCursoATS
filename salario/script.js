function trabajo(horas, valor) {
  const salarioActual = valor * horas;
  console.log("Su salario actual es: ", salarioActual);

  const aumento = salarioActual * 0.25;

  const resultado = salarioActual + aumento;
  console.log("su nuevo salario es: ", resultado);
}
trabajo(8, 20);
