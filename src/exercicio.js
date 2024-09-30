const alunos = [
    {nome: "AlunoA", nota:5},
    {nome: "AlunoB", nota:8},
    {nome: "AlunoC", nota:6},
    {nome: "AlunoD", nota:3}
];

function alunosNota6 (alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosNota6(alunos);
console.log(aprovados);
