/* Calcular la cantidad de segundos dentro del numero de horas, 
minutos y segundos que ingrese el usuario */

//1 hora son 3600 segundos, 1 minuto son 60 segundos, 


function timeToSecond(segundos, minutos, horas) {
    
    const minuteToSecond = minutos * 60;
    const minuteToHour = horas * 3600;
    console.log("Hay un total de ", segundos + minuteToSecond + minuteToHour, "segundos")    
}

timeToSecond(60,20,1);