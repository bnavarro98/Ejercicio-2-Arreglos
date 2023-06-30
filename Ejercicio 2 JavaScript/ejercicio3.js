let numeros = [10, 40, 30, 20, 15, 5];

// El array se ordena de mayor a menor con la funcion .sort
let numerosOrdenados = numeros.sort(function(a, b) {
  return a - b;
});

// Muestra el array ya ordenado
console.log("Arreglo ordenado de menor a mayor:", numerosOrdenados);

// Obtener el número menor y mayor con la funcion Math.min y Math.max
let numeroMenor = Math.min(...numeros);
let numeroMayor = Math.max(...numeros);

// Mostrar el número menor y mayor
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);