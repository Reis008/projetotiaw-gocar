var userlogado = JSON.parse(localStorage.getItem('userlogado'))
document.getElementById("nome").value = userlogado.nomeusuario;
document.getElementById("email").value = userlogado.emailusuario;
document.getElementById("tel").value = userlogado.telefoneusuario;


function perf(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("tel").value;

    var cadastros = JSON.parse(localStorage.getItem('cadastros'))
    cadastros.forEach((item) => {
        if (item.nomeusuario == userlogado.nomeusuario && item.emailusuario == userlogado.emailusuario && item.telefoneusuario == userlogado.telefoneusuario) {
            let indexItem = cadastros.indexOf(item);
            cadastros.splice(indexItem, 1);
            item = {
                nomeusuario: nome,
                emailusuario: email,
                telefoneusuario: telefone,
                cpfusuario: item.cpfusuario,
                senha: item.senha
            }

            cadastros.push(item);
            localStorage.setItem("cadastros",   JSON.stringify(cadastros));
        }
    })

    console.log(localStorage.getItem('cadastros'))
}

function atualizado(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("tel").value;

    if (nome == "" || email == "" || telefone == ""){
        msgFormulario.setAttribute("style", "display: block")
        msgFormulario.innerHTML = "Preencha todos os campos"
    }else{
        msgFormulario.setAttribute("style", "display: none")
        msgSuccess.setAttribute("style", "display: block"),
        msgSuccess.innerHTML = "Atualizado com sucesso"
        perf();
    }

}