function carregar(){
let listaPost = document.querySelector(".pagina")
let itemPost = document.querySelector(".alunos");
fetch("http://localhost:5000/academia/alunos")
.then(res => { return res.json() })
.then(posts => {
    posts.forEach(post =>{
        let novoPost = itemPost.cloneNode(true);
        novoPost.classList.remove("model");

        novoPost.querySelector("#id_aluno").innerHTML = post.id_aluno;
        novoPost.querySelector("#nome").innerHTML = post.nome;
        novoPost.querySelector("#nascimento").innerHTML = post.nascimento;
        novoPost.querySelector("#sexo").innerHTML = post.sexo;
        novoPost.querySelector("#peso").innerHTML = post.peso;
        novoPost.querySelector("#telefone").innerHTML = post.telefone;
        
        listaPost.appendChild(novoPost);
    })
})
}

function loadex(){

    let listaPost = document.querySelector(".pagina")
    let itemPost = document.querySelector(".exercicios");

fetch("http://localhost:5000/academia/fichas")
.then(res => {return res.json() })
.then(posts => {
    posts.forEach(post =>{
        let novoPost = itemPost.cloneNode(true)
        novoPost.classList.remove("model");

        novoPost.querySelector("#id_aluno").innerHTML = post.id_aluno;
        novoPost.querySelector("#id_exercicio").innerHTML = post.id_exercicio;
        novoPost.querySelector("#dia_semana").innerHTML = post.dia_semana;
        novoPost.querySelector("#serie").innerHTML = post.serie;


        listaPost.appendChild(novoPost);
    })
})
}

function loadap(){

    let listaPost = document.querySelector(".pagina")
    let itemPost = document.querySelector(".aparelhos");

fetch("http://localhost:5000/academia/aparelhos")
.then(res => {return res.json() })
.then(posts => {
    posts.forEach(post =>{
        let novoPost = itemPost.cloneNode(true)
        novoPost.classList.remove("model");

        novoPost.querySelector("#id_aparelho").innerHTML = post.id_aparelho;
        novoPost.querySelector("#nome_aparelho").innerHTML = post.nome_aparelho;


        listaPost.appendChild(novoPost);
    })
})
}

function loade(){

    let listaPost = document.querySelector(".pagina")
    let itemPost = document.querySelector(".ex");

fetch("http://localhost:5000/academia/exercicios")
.then(res => {return res.json() })
.then(posts => {
    posts.forEach(post =>{
        let novoPost = itemPost.cloneNode(true)
        novoPost.classList.remove("model");

        novoPost.querySelector("#id_exercicio").innerHTML = post.id_exercicio;
        novoPost.querySelector("#descricao").innerHTML = post.descricao;
        novoPost.querySelector("#grupo_muscular").innerHTML = post.grupo_muscular;
        novoPost.querySelector("#id_aparelho").innerHTML = post.id_aparelho;

        listaPost.appendChild(novoPost);
    })
})
}