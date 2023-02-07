function loadProd() {
    fetch("http://localhost:5000/produto", {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(e => {

                var produto = document.querySelector(".conteudo").cloneNode(true)
                produto.classList.remove("model")

                produto.querySelector("#nome").innerHTML = e.nome
                produto.querySelector("#valor").innerHTML = "R$" + e.valor
                produto.querySelector("#id_setor").innerHTML = e.setor_id

                document.querySelector(".content").appendChild(produto)

            })
        })
}

function loadVendedor() {
    fetch("http://localhost:5000/vendedor", {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(e => {

                var vendedor = document.querySelector(".conteudo").cloneNode(true)
                vendedor.classList.remove("model")

                vendedor.querySelector("#nome").innerHTML = e.nome
                vendedor.querySelector("#salario").innerHTML = "R$" + e.salario
                vendedor.querySelector("#id_setor").innerHTML = e.setor_id

                document.querySelector(".content").appendChild(vendedor)

            })
        })
}

function loadVendas() {
    fetch("http://localhost:5000/vendas", {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(e => {

                var vendedor = document.querySelector(".conteudo").cloneNode(true)
                vendedor.classList.remove("model")

                vendedor.querySelector("#nome").innerHTML = e.nome
                vendedor.querySelector("#salario").innerHTML = "R$" + e.salario
                vendedor.querySelector("#id_setor").innerHTML = e.setor_id

                document.querySelector(".content").appendChild(vendedor)

            })
        })
}

function loadDetalhes() {
    fetch("http://localhost:5000/detalhes", {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(e => {

                var detalhes = document.querySelector(".conteudo").cloneNode(true)
                detalhes.classList.remove("model")

                detalhes.querySelector("#id_produto").innerHTML = e.id_produto
                detalhes.querySelector("#id_venda").innerHTML = e.id_venda
                detalhes.querySelector("#quantidade").innerHTML = e.quantidade

                document.querySelector(".content").appendChild(detalhes)

            })
        })
}

function loadSetores() {
    fetch("http://localhost:5000/setor", {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(e => {

                var setor = document.querySelector(".conteudo").cloneNode(true)
                setor.classList.remove("model")

                setor.querySelector("#nome").innerHTML = e.nome
                setor.querySelector("#comissao").innerHTML = "R$" + e.comissao
                
                document.querySelector(".content").appendChild(setor)

            })
        })
}

function toggleModal(){
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'}