function carregar() {
  let itemPost = document.querySelector(".clone");
  fetch("http://localhost:3000/duplicatas/clientes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((post) => {
        let novoPost = itemPost.cloneNode(true);
        novoPost.classList.remove("modelo");
        novoPost.querySelector("#ID").innerHTML = post.cod_cli;
        novoPost.querySelector("#nome").innerHTML = post.nome;
        novoPost.querySelector("#endereco").innerHTML = post.endereco;
        novoPost.querySelector("#bairro").innerHTML = post.bairro;
        novoPost.querySelector("#cidade").innerHTML = post.cidade;
        novoPost.querySelector("#uf").innerHTML = post.uf;
        novoPost.querySelector(
          "#telefones"
        ).innerHTML = `<button onclick="telefones(${post.cod_cli})"><img src="https://i.pinimg.com/originals/86/b3/dd/86b3dda123eb0493e6625470b83464a6.png"></button>`;

        document.querySelector(".clientes").appendChild(novoPost);
      });
    });
}

function telefones(id) {
 
  fetch("http://localhost:3000/duplicatas/clientes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((post) => {
        if (id == post.cod_cli) {
          post.telefones.forEach((p) => {
            document.getElementById("tipo").innerHTML += p.tipo + "\r\n";
            document.getElementById("numero").innerHTML += p.numero + "\r\n";
            console.log(document.getElementById("numero"));
          });
        }
      });
    });

    document.querySelector(".modal").classList.toggle("modelo");
}
