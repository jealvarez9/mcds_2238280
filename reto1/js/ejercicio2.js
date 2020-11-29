function funcionrMultiplicar(){
   const numero1 = 12;
   const numero2 = 4;
   let resta = "la resta de "+numero1+" - "+numero2+" es " + (numero1 - numero2);
   let multiplicacion= " y la multiplicación de "+numero1+" * "+numero2+" es "+(numero1*numero2);
   let resultado = resta+multiplicacion;
   document.getElementById("imprimirDatos").innerHTML = resultado ;
}
