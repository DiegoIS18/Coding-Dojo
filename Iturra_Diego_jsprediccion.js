//Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?
//Prediccion 1.- Naci en 1980//
function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}


//Predicción 2: si necesitáramos enviar un año de nacimiento hacia la función, le diríamos a la función "oye, te enviaremos una variable llamada EntradaAñoNacimiento". Lo hacemos agregando el nombre de la variable entre paréntesis. Mira a continuación un ejemplo. 

//Prediccion 2. Naci en 1980//

//Entonces, si la variable EntradaAñoNacimiento es 1980 (también conocida como var EntradaAñoNacimiento = 1980), y se llama a esta función, ¿qué indicará console.log?
function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}


//Predicción 3: Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?
//Prediccion 3.- ¡Sumando numeros!
//num1 is : 10
//num2 is: 20
//30//

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}