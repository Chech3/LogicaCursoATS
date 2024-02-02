//calcular salario de un obrero 
//Si trabaja 40 horas o menos se le paga 16$ la hora  
//y si trabaja mas de 40 horas, se le paga 20 por hora

function total (horas) {
   sueldo_normal = horas*16
   sueldo_extra = 16*40+20*(horas-40)
   if (horas <= 40) {
        console.log("su sueldo es: ", sueldo_normal );
   } else {
    console.log("su sueldo normal serian: ", sueldo_normal, "+ horas extras: ", sueldo_extra );
   }
}

total(39);