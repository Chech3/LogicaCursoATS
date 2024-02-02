// Calcular Volumen y area de un cubo 

function cube(side) {
    const volume = side**3
    const area = 6 * (side**2)
    console.log("El volumen es ", volume, "el area total es :", area)
}

cube(10)