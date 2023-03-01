let curso = [24, 36, 41, 24, 27, 28, 35];

console.log(curso);


curso["nombre"] = "Front";
curso.push(56);

console.log(curso);

curso.unshift(1);

console.log(curso);

let suma =0;
console.log(suma);
curso.forEach(function(elemento, indice){
    suma  = suma + elemento;
    console.log(elemento, suma)
})


console.log(suma/curso.length)
