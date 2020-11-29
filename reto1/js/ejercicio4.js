function funcionMesAleatorio(){
    const Minimo = 0;
    const Maximo = 12;
    let mes = Math.floor((Math.random() * Maximo - Minimo + 1)) + Minimo;

    let resultado = (mes ==1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) ?  "El mes tiene 31 días" : (mes ==4 || mes == 6 || mes ==9 || mes == 11) ? "El mes tiene 30 días" : "El mes tiene 29 días";
    document.getElementById("imprimirDatos").innerHTML = resultado ;
}