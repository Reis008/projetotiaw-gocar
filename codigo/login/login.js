function login() {
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
        alert('Logado com sucesso')
        limparform();
    } else {
        alert('Senha ou nome de usuário incorretos')
    }

    function limparform(){
        document.getElementById("user").value="";
        document.getElementById("password").value="";
    
    }


}