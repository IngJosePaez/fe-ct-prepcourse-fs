/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   if (x == y) {
      console.log('Son iguales');
      return true;
   }
   else {
      console.log('Son distintos');
      return false;
   }
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   if (str1.length === str2.length) {
      console.log('Tienen la misma longitud');
      return true;
   }
   else {
      console.log('Son distintos');
      return false;

   }
}

const valorIngresado = parseFloat(prompt('Ingrese un numero:'));
const resultado = menosQueNoventa(valorIngresado);

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   if (num < 90) {
      console.log('Es menor que noventa');
      return true;
   }
   else {
      console.log('Es mayor');
      return false;
   }
   
}

const valorIngres = parseFloat(prompt('Ingrese un numero:'));
const cincuent = mayorQueCincuenta(valorIngres);
function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   if (num > 50) {
      console.log('Es mayor que cincuenta');
      return true;
   }
   else {
      console.log('Es menor');
      return false;
   }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   if (num % 2 == 0) {
      console.log('Es par')
      return true;
   }
   else {
      return false;
   } 
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   if (num % 2 !== 0) {
      console.log('Es impar');
      return true;
   }
   else {
      console.log('No es impar');
      return false;
   } 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
