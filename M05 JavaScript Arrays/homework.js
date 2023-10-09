/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
      if (array.length > 0) {
         return array[0];
      } 
   }

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
      if (array.length > 0) {
         return array[array.length - 1];
      } else {
         return undefined; // Otra opción es devolver undefined si el arreglo está vacío
      }
   }


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return array.length;
}
const miArreglo = [1, 2, 3, 4, 5];
const longitud = obtenerLargoDelArray(miArreglo);
console.log(`La longitud del arreglo es: ${longitud}`);


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + 1;
   }
   return array;
}

const miArregloIncr = [1, 2, 3, 4, 5];
const arregloAumentado = incrementarPorUno(miArregloIncr);
console.log(arregloAumentado);



function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   array.push(elemento);
   return array;
}
const ArregloItem = [2, 4, 6, 8, 10];
const elementoAgregado = 12;
const ArregloFinal = agregarItemAlFinalDelArray(ArregloItem, elementoAgregado);
console.log(ArregloFinal);


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   array.unshift(elemento);
   return array;
}
const ArregloComienzo = [3, 5, 7, 9];
const elementoInicial = 11;
const ArregloResultado = agregarItemAlComienzoDelArray(ArregloComienzo, elementoInicial);
console.log(ArregloResultado); 

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   return palabras.join(' ');
}
const palabras1 = ['Hello', 'world!'];
const frase = dePalabrasAFrase(palabras1);
console.log(frase);   

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   for ( let i = 0;i< array.length;i++) {
         if ( array [i] === elemento){
            return true;
         }
   }
   return false;
}
const ArregloEle = [3, 5, 7, 9];
const elementoIngre = 9;
const Verificar = arrayContiene(ArregloEle, elementoIngre);
console.log(Verificar);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   
  
   let total = 0;
   for (let i = 0;i < arrayOfNums.length; i++) {
      total += arrayOfNums[i]; 
   }
   return total;
}
const arregloNumeros= [1, 2, 3, 4, 5];
const verificacion = agregarNumeros(arregloNumeros);
console.log(verificacion);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
 
   let sumanotas = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      sumanotas += resultadosTest[i];
   }
   const promedio = sumanotas / resultadosTest.length;
   return promedio;
}
const libretas = [1,3,4,5,5,4];
const verificarPromedio = promedioResultadosTest(libretas)
console.log(verificarPromedio);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   let masGrande = arrayOfNums[0]; // Inicializa la variable masGrande con el primer elemento del arreglo
   
   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > masGrande) {
         masGrande = arrayOfNums[i]; // Actualiza masGrande si encuentra un número más grande
      }
   }
   
      return masGrande;
   }
   
   const arrayTable = [1, 2, 8, 4, 5];
   const MasGrande = numeroMasGrande(arrayTable);
   console.log(MasGrande);
   

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   if (arguments.length === 0) {
      return 0;
   }

   // Inicializa una variable para almacenar el producto
   let producto = 1;

   // Itera a través de los argumentos usando un bucle for
   for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
   }

   // Retorna el producto resultante
   return producto;
}
console.log(multiplicarArgumentos(2, 3, 4)); // Devuelve 24 (2 * 3 * 4)
console.log(multiplicarArgumentos(5, 10, 2, 3)); // Devuelve 300 (5 * 10 * 2 * 3)
console.log(multiplicarArgumentos()); // Devuelve 0 (ningún argumento)
console.log(multiplicarArgumentos(7)); // Devuelve 7 (un argumento)


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.

   let contador = 0; // Inicializa un contador para poder contabilizar y guardar los numeros mayores que 18
   
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18 ) {
         contador ++; // Incrementa el contador si encuentra un número mayor a 18
      }
      
   }
   return contador;// Retorna el contador que contiene la cantidad de elementos mayores a 18
}

const numeros = [10, 20, 30, 15, 25, 50];
const cantidad = cuentoElementos(numeros);
console.log(cantidad);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Esta función toma como argumento un número que representa un día de la semana.
   
      switch (numeroDeDia) {
         // Utilizamos un switch para evaluar el número de día directamente.
   
         case 1:
            // En el caso de que "numeroDeDia" sea igual a 1 (Domingo), se ejecuta este bloque.
            console.log('Es Domingo');
            break;
   
         case 7:
            // En el caso de que "numeroDeDia" sea igual a 7 (Sábado), se ejecuta este bloque.
            console.log('Es Sábado');
            break;
   
         default:
            // Si el número de día no es ni 1 ni 7, se ejecuta este bloque.
            console.log('Es un día laboral');
      }
   }
   
   const dias = [1, 2, 3, 4, 5, 6, 7,];
   for (let i = 0; i < dias.length; i++) {
      diaDeLaSemana(dias[i]);
   }


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   var numero = num.toString();

   return numero[0] == 9;
 
 
 }
 
 console.log(empiezaConNueve(999))
   


 function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
         return false;
      }
   }
   return true;
}

const arreglo1 = [3, 3, 3, 3];
const arreglo2 = [3, 3, 3, 3];

console.log(todosIguales(arreglo1)); // Debería imprimir true, ya que todos los elementos son iguales a 3.
console.log(todosIguales(arreglo2)); // Debería imprimir false, ya que los elementos no son iguales entre sí.




function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   function mesesDelAño(array) {
      // Paso 1: Inicializa un nuevo arreglo vacío para almacenar los meses encontrados.
      const mesesEncontrados = [];
    
      // Paso 2: Utiliza un bucle for para recorrer el arreglo de meses.
      for (let i = 0; i < array.length; i++) {
        // Paso 3: Verifica si el mes actual es igual a "Enero", "Marzo" o "Noviembre".
        const mesActual = array[i];
        if (mesActual === "Enero" || mesActual === "Marzo" || mesActual === "Noviembre") {
          // Paso 4: Si el mes es igual a alguno de esos, agrégalo al nuevo arreglo.
          mesesEncontrados.push(mesActual);
        }
      }
    
      // Paso 5: Verifica si se encontraron meses y retorna el resultado.
      if (mesesEncontrados.length > 0) {
        return mesesEncontrados;
      } else {
        // Paso 6: Si el nuevo arreglo está vacío, retorna el mensaje adecuado.
        return "No se encontraron los meses pedidos";
      }
    }
    
    // Ejemplo de uso:
    const meses = ["Febrero", "Enero", "Abril", "Noviembre", "Marzo"];
    const resultado = mesesDelAño(meses);
    console.log(resultado); // Debería mostrar ["Enero", "Noviembre", "Marzo"]
    
}
numeros.forEach(function(array) {
   console.log(array);
   if()
});
const mesesDesord = ['Enero','Abril','Octubre','Marzo','Diciembre', 'Septiembre', 'Agosto', 'Junio', 'Julio', 'Febrero', 'Mayo' ];



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
