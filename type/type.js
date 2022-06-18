"use strict";
const aluno = {
    nome: "Gabriel",
    idade: 19,
    profissao: "estudante",
    listaInteresses: ["jogos", "desenhar", "assistir animes"]
};
function alunoinfo(pessoas) {
    return pessoas.listaInteresses;
}
console.log(alunoinfo(aluno));
var Materias;
(function (Materias) {
    Materias["ANGULAR"] = "Angular";
    Materias["TYPESCRIPT"] = "TypeScript";
    Materias["GIT"] = "Git";
})(Materias || (Materias = {}));
const prof = {
    nome: "Alan",
    materias: ["Angula", "TypeScript", "Git"]
};
const profe = {
    nome: "Nathan",
    materias: ["Angula", "Git"]
};
