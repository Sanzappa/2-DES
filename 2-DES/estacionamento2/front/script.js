var uriClientes = `http://localhost:5000/estacionamento/clientes`;
var clientes = [];
// var end = document.querySelector('#endereco')
// var tel = document.querySelector('#telefone')
var editar = document.querySelector('.editar')
const btCadedit = document.querySelector("#cadastro");


function abrirModalCadastro() {
  
    btCadedit.onclick = () => { cadastrar()}
    document.querySelector("#nome").value= "";
    document.querySelector("#endereco").value="";
    document.querySelector("#telefone").value= "";
    document.querySelector("#placa").value= "";
    document.querySelector("#tipo").value= "";
    editar.classList.remove("model");
  }
  function fecharModalCadastro(){
    editar.classList.add('model')
  }
  
  function cadastrar(){ 
    
    let corpo = {
        "nome_cliente": document.querySelector("#nome").value,
        "endereco": document.querySelector("#endereco").value,
        "telefone": document.querySelector("#telefone").value,
        "placa": document.querySelector("#placa").value,
        "tipo": document.querySelector("#tipo").value
    }
    const options = {
        "method": 'POST',
        "headers": {"Content-Type": 'application/json' }
    };
       options.body = JSON.stringify(corpo);
   
    //Faz efetivamente a requisição ao back-end

    if (corpo.nome_cliente != 0 && corpo.endereco != 0 && corpo.telefone != 0 && corpo.placa != 0 && corpo.tipo != 0)  {
        fetch(uriClientes, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    window.location.href = 'clientes/index.html';
                } else {
                    alert('Erro no cadastramento:' + resp);
                    window.location.reload();
                }
            })
            .catch(err => alert(err));
    } else {
        alert('Preencha os campos obrigatórios');
    }
}

