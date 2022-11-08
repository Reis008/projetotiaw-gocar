<script>
        function mesmasenha(){
            const senha = document.querySelector('input[name=senha]');
            const confirmar = document.querySelector('input[name=confirmar]');

            if (confirmar.value === senha.value){
                confirmar.setCustomValidity('');
            }else{
                confirmar.setCustomValidity('As senhas não conferem');
            }
        }
    function senhaOK(){ alert("Cadastro Aprovado!") }


    </script>