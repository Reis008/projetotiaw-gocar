
/*Validação de senhas*/
function validatesenha(){
    var senha = document.getElementById("senha");
    var confirm_senha = document.getElementById("confirmsenha");

    if(senha.value != confirm_senha.value) {
        confirm_senha.setCustomValidity(alert("Senhas diferentes"));
    } else {
        confirm_senha.setCustomValidity(alert("Cadastrado com sucesso"));
        cadastroNovo();
        limparform();
    }

    senha.onchange = validatesenha;
    confirm_senha.onkeyup = validatesenha;
}

/*Vetor cadastros*/
let bancoContatos = JSON.parse (    localStorage.getItem("cadastros")   );

if(!bancoContatos){
 bancoContatos = [
        {
            "nomeusuario": "Jorge",
            "emailusuario": "jorgecampos@hotmail.com",
            "telefoneusuario": "(31) 99845 - 5643",
            "cpfusuario": "123.456.789 - 00",
            "senha" : "coxinha123"
        },
        {
            "nomeusuario": "Maria",
            "emailusuario": "mariacampos@hotmail.com",
            "telefoneusuario": "(31) 99845 - 5643",
            "cpfusuario": "123.456.789 - 00",
            "senha" : "coxinha321"
        }
    ]
}

/*Função Limpar formulário*/
function limparform(){
    document.getElementById("nome").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("cpf").value="";
    document.getElementById("senha").value="";

}


/*Função Cadastro*/
function cadastroNovo(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;

    var novoCadastro = {
        "nomeusuario": nome,
        "emailusuario": email,
        "telefoneusuario": tel,
        "cpfusuario": cpf,
        "senha" : senha
    }

    bancoContatos.push(novoCadastro);
    localStorage.setItem("cadastros",   JSON.stringify(bancoContatos));
    console.log(bancoContatos);

}


