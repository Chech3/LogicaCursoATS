function mediaGeometrica() {
numeros = [3,5,12]

let result = 1
for (let i = 0; i < numeros.length; i++) {
    result *= numeros[i]
    
}

const total = Math.pow(result, numeros.length)

console.log(total)


}


mediaGeometrica();