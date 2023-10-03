/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
      //
      const cuadrado = Math.pow(num, 2);
      return (cuadrado);
   }
   
   // Llamamos a la función para elevar 2 al cuadrado
   const resultado = elevarAlCuadrado(2);
   
   console.log(resultado);


function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   const re = Math.pow(num, 3);
   return (re);
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   const resultadoElevar = Math.pow(num,exponent );
   return (resultadoElevar);
}
const resultadoElevar = elevar(2, 3);
console.log(resultadoElevar);


function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   const redondear = Math.round(num);
   return (redondear);
}
const numeroredondeado = redondearNumero(0.49);
console.log(numeroredondeado);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   const redondearH = Math.ceil(num);
   return (redondearH);
}
const numeroH = redondearHaciaArriba(0.49);
console.log(numeroH);

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   const random = Math.random();
   return (random);
}
const numeroR = numeroRandom();
console.log(numeroR);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
