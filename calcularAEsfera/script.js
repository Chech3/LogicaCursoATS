//Calcular Area y el volumen de una Esfera

function Esfera(radio) {
   const formulaArea = 4*Math.PI*(radio**2)
   const formulaVolumen = 4/3*Math.PI*(radio**2)

   console.log("el area de la esfera es: ", formulaArea);
   console.log("el volumen de la esfera es: ", formulaVolumen);
}

Esfera(3);