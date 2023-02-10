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

                vendedor.querySelector("#nomeDoVendedor").innerHTML = e.nome
                vendedor.querySelector("#salario").innerHTML = "R$" + e.salario
                vendedor.querySelector("#setor_id").innerHTML = e.setor_id

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
                var vendas = document.querySelector(".conteudo").cloneNode(true)
                vendas.classList.remove("model")
                let dateAux = new Date(e.data)

                vendas.querySelector("#data").innerHTML = dateAux.toLocaleString('pt-br')
                vendas.querySelector("#id-vendedor").innerHTML = e.vendedor.id
                vendas.querySelector("#Qtd").innerHTML = e.detalhe[0].quantidade
                vendas.querySelector("#Produto").innerHTML = e.detalhe[0].produto.nome

                document.querySelector(".content").appendChild(vendas)

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
                setor.querySelector("#comissao").innerHTML = e.comissao + "%"

                document.querySelector(".content").appendChild(setor)

            })
        })
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'
}

function cadastrarProd() {
    var prodName = document.querySelector("#prodName")
    var prodValor = document.querySelector("#prodValor")
    var prodSetor = document.querySelector("#prodSetor")

    var prod = {
        "nome": prodName.value,
        "valor": parseFloat(prodValor.value),
        "setor_id": parseInt(prodSetor.value)
    }

    fetch("http://localhost:5000/produto", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(prod)
    })
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}
function cadastrarDetalhe() {
    var idProd = document.querySelector("#idProd")
    var idVenda = document.querySelector("#idVenda")
    var qtd = document.querySelector("#qtd")

    var detalhe = {
        "id_produto": parseInt(idProd.value),
        "id_venda": parseInt(idVenda.value),
        "quantidade": parseInt(qtd.value)
    }

    fetch("http://localhost:5000/detalhes", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(detalhe)
    })
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}
function cadastrarSetor() {
    var nome = document.querySelector("#nomeSetor")
    var comissao = document.querySelector("#comissaoSetor")

    var setor = {
        "nome": nome.value,
        "comissao": parseFloat(comissao.value)
    }

    console.log(setor)

    fetch("http://localhost:5000/setor", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(setor)
    })
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}
function cadastrarVenda() {
    var vendedorId = document.querySelector("#vendedorId")
    var idProduto = document.querySelector("#idProduto")
    var quantidade = document.querySelector("#Quantidade")

    var vendas = {
        "id_vendedor": parseInt(vendedorId.value),
        "detalhe":[
            {
                "id_produto":Number(idProduto.value),
                "quantidade":Number(quantidade.value)
            }
        ]

    }

    fetch("http://localhost:5000/vendas", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(vendas)
    })
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}
function cadastrarVendedor() {
    var VendedorNome = document.querySelector("#VendedorNome")
    var salarioVendedor = document.querySelector("#salarioVendedor")
    var idSetor = document.querySelector("#id-setor")

    var vendedor = {
        "nome": VendedorNome.value,
        "salario": parseFloat(salarioVendedor.value),
        "setor_id": parseInt(idSetor.value)
    }

    fetch("http://localhost:5000/vendedor", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(vendedor)
    })
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}