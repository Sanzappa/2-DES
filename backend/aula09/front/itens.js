const uri = 'http://localhost:3000/patrimonio/itens/';
const corpo = document.querySelector("#corpo");
var itens = [];

const carregar = () => {
    const options = {method: 'GET'};
    fetch(uri, options) 
    .then(res => res.json())
    .then(res => {
        itens = res;
        preencherTela();
    })
    .catch(err => console.error(err));
}

const preencherTela = () =>{
    itens.forEach(e=>{
        let card = document.querySelector(".card").cloneNode(true);

        data = new Date(e.aquisicao);
        dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        card.classList.remove('model')
        card.querySelector("#ni").innerHTML = e.ni;
        card.querySelector("#aquisicao").innerHTML = dataFormatada
        card.querySelector("#denominacao").innerHTML = e.denominacao;
        card.querySelector("#valor").innerHTML = e.valor;
        card.querySelector("#img").src = "../docs/assets/" + e.img;
        card.querySelector("#del").setAttribute('onclick', `del(${e.ni})`)
        corpo.appendChild(card)
    })
}

const del = (ni) => {
    const options = {
        method: "DELETE"
    }
    if(confirm("Confirma a exclusão do item "+ni)){
    fetch(uri + ni, options)
        .then(res => res.status)
        .then(res => {
            if (res == 204)
                window.location.reload();
        })
        .catch(err => console.error(err));
    }
}

function cadastrar(){
    
}