function login(){
    fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    let nome = document.getElementById("email").value
    let senha = document.getElementById("username").value

    console.log(nome + " " + senha)
    data.forEach(user => {
        if(nome == user.email && senha == user.username){
            window.localStorage.setItem("Logado", JSON.stringify({id: user.id, name: user.name}))
            window.location.href = "./rede.html";
        }else{
            
        }}
        )
})
}

function post(){
    fetch("https://jsonplaceholder.typicode.com/posts")
.then((resposta) => {
    return resposta.json();
})
.then((postagem) => {
    var user = JSON.parse(window.localStorage.getItem("Logado"))
    postagem.forEach(post =>{
        if(user.id == post.userId){
            let newPost = document.querySelector(".modelo").cloneNode(true)
            newPost.querySelector("#ptitle").innerHTML = post.title
            newPost.querySelector("#pbody").innerHTML = post.body

            document.querySelector("#usuario").innerHTML = user.name

            newPost.classList.remove("modelo")

            document.querySelector('.page').appendChild(newPost)
        }
    })
})
}