const usuarios = [
    {
        nome :"Santiago",
        nickname : "Santigas",
        senha : "123"
    },
    {
        nome :"Guilherme",
        nickname : "Guiermo",
        senha : "321"
    },
    {
        nome :"Felipe",
        nickname : "Felipe",
        senha : "12345"
    }
]

function login(){
    var nome = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    for(i = 0; i < usuarios.length; i++){
        if(nome == usuarios[i].nome && senha == usuarios[i].senha){
            window.location.href = "./loja.html";
        }else{
            console.log("ih, bobiou")
        }
    }
}