var Clientes =  `http://localhost:5000/estacionamento/clientes/view`
var cli = [];

function loadCli(){
    fetch(Clientes)
    .then(res => console.log(res.json()))
    .then(data =>{ 
        cli = data;
        console.log(cli)
        preencherTabela()
    })
}

function preencherTabela(){
    let indice = 0;
    cli.forEach(c =>{
        console.log(c)
        let linha = document.createElement("tr");
        let nome = document.createElement("td");
        let endereco = document.createElement("td");
        let telefone = document.createElement("td");
        nome.innerHTML = c.nome_cliente;
        endereco.innerHTML = c.endereco;
        telefone.innerHTML = c.telefone;
        linha.appendChild(nome);
        linha.appendChild(endereco);
        linha.appendChild(telefone);
        document.querySelector("#registros").appendChild(linha);
        indice++;
    } )
}
function xMultiImage(){
 
}

