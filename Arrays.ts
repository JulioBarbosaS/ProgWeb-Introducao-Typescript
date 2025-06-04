// === Arrays e Métodos de Manipulação

let notas: number[] = [7, 7.5,8,5];

//forEach
//iterar sobre elementos de uma coleção
notas.forEach(n => console.log("Nota:", n));
 
//map
//criar um novo array com os resultados da chamada de uma função fornecida
let notAjustadas = notas.map(n => n + 0.5);

//filter
//criar um novo array contendo somente elementos que atendam uma condição específica
let aprovados = notas.filter(n => n >= 6);

//push e pop
notas.push(10); //adiciona um elemento no final do array
notas.pop(); // remover um elemento do final do array