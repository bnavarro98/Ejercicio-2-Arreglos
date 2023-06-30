let userInput = prompt("Ingrese una lista de números separados por una coma");

// Separamos el string utilizando la coma como separador con la funcion split
let numerosString = userInput.split(",");

// Convertir cada elemento del array a número utilizando la función map()
let numerosArray = numerosString.map(function(numero) {
  return parseInt(numero);
});

// Mostrar resultado en la consola
console.log(numerosArray);