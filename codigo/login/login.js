function campos(){
    var login = document.getElementById("user");
    var senha = document.getElementById("password");

    if (login.value == "" || senha.value == ""){
        msgFormulario.setAttribute("style", "display: block")
        msgFormulario.innerHTML = "Preencha todos os campos"
    }else{
        msgFormulario.setAttribute("style", "display: none")
        logar()
    }
}



function logar(){
    let usuario = {
        login: document.getElementById('user').value,
        senha: document.getElementById('password').value
    }
    
    let cadastros = []

    let logado = false;

    let uservalid;

    cadastros = JSON.parse(localStorage.getItem('cadastros'))

    cadastros.forEach((item) => {
        if (usuario.login == item.nomeusuario && usuario.senha == item.senha) {

            uservalid = {
                nome: item.nomeusuario,
                email: item.emailusuario,
                tel: item.telefoneusuario,
                cpf: item.cpfusuario,
                senha: item.senha
            }

            logado = true;
        }
    })

    console.log(uservalid);

    if (logado) {
        window.location.href = "/home/home.html";
        msgError.setAttribute("style", "display: none")
        limparform();
    } else {
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "Senha ou usuário inválido"
    }

    function limparform(){
        document.getElementById("user").value="";
        document.getElementById("password").value="";
    
    }


}