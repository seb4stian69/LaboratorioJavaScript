let nivel = 2;

let ressult = arrayPregunta.filter(function (preguntita) {
  return preguntita.level == nivel;
});

let ran = Math.floor(Math.random() * ressult.length);
let valorran = ressult[ran];
console.log(valorran);