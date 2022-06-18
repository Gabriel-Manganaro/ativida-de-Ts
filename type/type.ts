//exercicío 1

interface pessoa {
    nome:string,
    idade:number,
    profissao:string,
    listaInteresses:string[];
}
//exercicío 2

const aluno: pessoa = {
    nome:"Gabriel", 
    idade:19,
    profissao:"estudante",
    listaInteresses:["jogos","desenhar","assistir animes"] 
}

//exercicío 3

function alunoinfo(pessoas: pessoa){
    return pessoas.listaInteresses
}

//exercicío 4

console.log(alunoinfo(aluno))

//exercicío 5

enum Materias {
    ANGULAR = "Angular",
    TYPESCRIPT = "TypeScript",
    GIT = "Git"
}
//exercicío 6 

interface prof {
    nome:string
    materias:Array<Materias>
}
//exercicío 7
const Alan : prof = {
    nome:"Alan",
    materias:[Materias.ANGULAR,Materias.TYPESCRIPT,Materias.GIT]
}

const Nathan : prof = {
    nome:"Nathan",
    materias:[Materias.ANGULAR,Materias.GIT] 
}

//exercicío 8

  const professor:Array<prof>=[Alan,Nathan]

//exercicío 9

function professores(nome:prof) {
    return nome.nome 
}
//exercicío 10
function materiaisprofessores(mat:Array<prof>){
    return mat.forEach((materias)=>{
        materias.materias;
    })
}

//exercicío 11

function professorTypescript(mat:Array<prof>){
    return mat.find(mat=>mat.materias.includes(Materias.TYPESCRIPT))
}
