class Aluno{
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno = new Aluno('Rui', 10);
const aluno1 = new Aluno('Sofia', 8);
const aluno2= new Aluno('Francisco', 5);
const aluno3 = new Aluno('Juliano', 5);
const aluno4 = new Aluno('Fatima', 4);
const alunos = [];
alunos.push(aluno, aluno1, aluno2, aluno3, aluno4);
const aprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(aprovados);