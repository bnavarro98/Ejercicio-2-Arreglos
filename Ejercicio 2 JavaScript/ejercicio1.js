// Array vacío
let numerosAleatorios = [];

// Generar 10 números aleatorios y guardarlos en el array
for (let i = 0; i < 10; i++) {
  let numero = Math.random() * 10;  //Los multipliqué por 10, porque son muy pequeños los números
  numero = numero.toFixed(2); //fixed para limitarlo a 2 decimales
  numerosAleatorios.push(numero); //push es para meter los números a nuestro arreglo
}

// Mostrar el resultado en la consola
console.log(numerosAleatorios);