/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   return(string);
}
const cade=devolverString('Soy un String');
console.log(cade);

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   return(x + y); 
}
const sumatoria = suma(5, 5);
console.log(sumatoria);


function resta(x, y) {
   // Retorna el resultado de la resta.
   return (x - y);
}
const resu = resta(5, 4);
console.log(resu);

function divide(x, y) {
   // Retorna el resultado de su división.
   return (x / y);
}
const resultado = divide(10, 2);
console.log(resultado);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return(x * y);
}
const resul = multiplica(5, 3);
console.log(resul);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   return(x % y);
}
const resto= obtenerResto (21 % 5);
console.log(resto);



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
