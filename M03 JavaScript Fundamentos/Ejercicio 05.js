/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
      if (isNaN(num)) {
         return 'No es un número válido';
      } else if (num > 0) {
         return 'Es positivo';
      } else if (num < 0) {
         return 'Es negativo';
      } else {
         return false;
      }
   }
   
   const entrada = prompt('Ingrese un número:');
   const numero = parseFloat(entrada);
   
   console.log(esPositivo(numero));
   


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   const resultado = str + '!' ;
   return resultado;
}
const cadena = 'Hola Mundo';
const cadenaConExclamacion = agregarSimboloExclamacion(cadena);
console.log(cadenaConExclamacion);


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   const Conca = nombre + ' '+apellido;
   return Conca;
}
const Nombre = 'Jose';
const Apellido = 'Paez';
const NombreCompleto = combinarNombres (Nombre, Apellido);
console.log(NombreCompleto);

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   var saludo = 'Hola';
   const Saludo = saludo + ' '+nombre+'!';
   return Saludo;
}
const nombre1 = 'Jose';
const NombreCompleto1 = obtenerSaludo(nombre1);
console.log(NombreCompleto1);

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   const area = alto * ancho
   return area;
}
   const alto = 5;
   const ancho = 10;
   const resultado = obtenerAreaRectangulo(alto, ancho);
   console.log(resultado);

   


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   const perimetro = lado+lado+lado+lado;
   return perimetro;
}
const lado = 8;
const resultadop = retornarPerimetro(lado);
console.log(resultadop);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   const areaT = (base * altura) / 2;
   return areaT;
}
   const base = 5;
   const altura = 7;
   const resultAT = areaDelTriangulo(base, altura);
   console.log(resultAT);


function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   const tasaDeCambio = 1.20; // Tasa de cambio de euros a dólares
   const cantidadEnDolares = euro * tasaDeCambio;
   return cantidadEnDolares;
}

const euroCanti = prompt('Ingrese un valor en Euro:');
const valorEnEuros = parseFloat(euroCanti);

const cambioEnDolares = deEuroAdolar(valorEnEuros);
console.log(`El valor ingresado en Euros equivale a:${cambioEnDolares}`);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   let caracter = prompt("Ingrese un carácter:");

   // Verificar si se ingresó solo un carácter y si es una vocal
   if (caracter.length === 1 && /^[aeiouAEIOU]$/.test(caracter)) {
     console.log("Es una vocal.");
   } else if (caracter.length === 1) {
     console.log("Dato incorrecto.");
   } else {
     console.log("Dato incorrecto. Ingresó más de un carácter.");
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
