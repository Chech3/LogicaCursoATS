//descuento del 15 por ciento
function descuento(precio) {
  const descuento = precio * 0.15;
  console.log(
    "el total son",
    precio,
    " menos el descuento el total son: ",
    precio - descuento
  );
}

descuento(100);
