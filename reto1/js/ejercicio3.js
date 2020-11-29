function funcionNumeroAleatorio(){
    const Minimo = 0;
    const Maximo = 10;
    let numero1 = 12;
    let numero2 = 4;
    let resultado = "";
    let aleatorio = Math.floor((Math.random() * Maximo - Minimo + 1)) + Minimo;
    if (aleatorio < 5){
         resultado = "la resta de "+numero1+" - "+numero2+" es " + (numero1 - numero2);
    }else if(aleatorio >= 5){
        resultado = "la multiplicación de "+numero1+" * "+numero2+" es "+(numero1*numero2);
    }
    document.getElementById("imprimirDatos").innerHTML = resultado ;
}