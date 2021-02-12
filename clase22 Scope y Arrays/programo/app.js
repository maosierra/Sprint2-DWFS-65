// var variable = "Hola desde global";
// if(true) {
//     var variable = "Hola desde if";
// }
// console.log(variable);

// let variableBloque = "Hola desde variable bloque";
// if(true) {
//     variableBloque = "Hola desde if var bloque";
// }
// console.log(variableBloque);

// const variableConstBloque = "Variable constante";
// if(true) {
//     const variableConstBloque = "constante nueva";
// }
// console.log(variableConstBloque);

// ARRAYS
//const carros = ['BMW', 'Ferrari', 'Mercedez'];

// const carros = [];
// carros[0] = 'BMW';
// carros[1] = 'Ferrari';
// carros[2] = 'Mercedez';

//const carros = new Array('BMW', 'Ferrari', 'Mercedez');

// carros.unshift('Ford');

// console.log(carros);

// carros.shift();

// console.log(carros);

// carros.push('Ford');

// console.log(carros);

// carros.pop();

// console.log(carros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// let mesesUnidos = meses.join(', ');
// console.log(mesesUnidos);
// console.log(meses);
// console.log(meses.length);

meses.splice(2, 0, 'Diciembre');
console.log(meses);

// for (let index = 0; index < meses.length; index++) {
//     const element = meses[index];
//     console.log(element);
// }

// for(let mesIndice in meses) {
//     const mes = meses[mesIndice];
//     console.log(mes);
// }

// meses.forEach(function mesesAnio(mes) {
//     console.log(mes);
// });

console.log(meses.sort().reverse());