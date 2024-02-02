//comprobar si el numero es 0, impar o par

function entrada (x) {
    if (x !== 0) {
        if (x % 2 == 0) 
        {
            console.log("es un numero par", x);
        } else {
        console.log("es un numero impar", x);
        }
    } else {
        console.log("debe seleciionar un numero que no sea 0");
    }
}


entrada(5);