let x = "Hola mundo"
let y = 202.02
let z = 20
const myInput = document.getElementById("myInput")

const devolver = myInput.addEventListener("keyup", (event) => {
    let value = event.target.value;
    console.log(value)
})

console.log("El primero valor",x,"El segundo valor pues",y,"tercero",z)

