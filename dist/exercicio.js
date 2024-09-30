"use strict";

var alunos = [{
  nome: "AlunoA",
  nota: 5
}, {
  nome: "AlunoB",
  nota: 8
}, {
  nome: "AlunoC",
  nota: 6
}, {
  nome: "AlunoD",
  nota: 3
}];
function alunosNota6(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosNota6(alunos);
console.log(aprovados);