const lampara = "apagado"
const foco = "apagado"

if (lampara == "encendido") {
    console.log("la lampara esta encendida")
    if (lampara=="encendido" && foco=="encendido") {
        console.log("Entonces esta esta funcionando")
    }
} else if (lampara == "apagado") {
    console.log("La lampara esta apagada debes revisar el foco")
    if (lampara == "apagado" && foco == "apagado" ) {
        console.log("la lampara no funciona")
    }
}