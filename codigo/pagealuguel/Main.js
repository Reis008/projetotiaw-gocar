const BaseUrlApi = 'https://parallelum.com.br/fipe/api/v2/'

function buscarmarca() {
    // $('#marca').html('')
    var selectMarca = $('#marca')
    var tipe = $('#tipo_veiculo').val()

    if (tipe == 0) {
        alert('Selecione um tipo de veiculo.')
    }
    else {
        urltratada = BaseUrlApi + tipe + '/brands'
        // console.log(urltratada)
        // $('#marca').html('')
        $.ajax({
                url: urltratada,
                // crossDomain: true,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    
                    let marcas = data
                    // console.log(data)
                    i = 0
                    $.each(data, function (index, element) {
                        marca = element.name
                        Idmarca = element.code
                        
                        $('#marca').append(`<option value="${Idmarca}">`+ marca +'</option>');
                        // console.log(element['name']+ 'ID da marca: '+Idmarca)
                    });
                    

                },
                error: function () {
                    console.log("error");
                }
        });
        
       
    }



}
function buscarmodelo() {
    

    var selectMarca = $('#modelo')
    var tipe = $('#tipo_veiculo').val()
    var marca = $('#marca').val()

    if (marca == 0) {
        alert('Selecione a marca do veiculo')
    }
    else {
        urltratada = BaseUrlApi + tipe + '/brands/'+ marca +'/models'
        // console.log(urltratada)
        // $('#modelo').html('')
        $.ajax({
                url: urltratada,
                // crossDomain: true,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    
                    let modelos = data
                    console.log(data)
                    i = 0
                    $.each(data, function (index, element) {
                        modelo = element.name
                        Idmodelo = element.code

                        $('#modelo').append(`<option value="${Idmodelo}">`+ modelo +'</option>');
                        // console.log(element['name']+ 'ID da marca: '+Idmarca)
                    });
                    

                },
                error: function () {
                    console.log("error");
                }
        });
        
       
    }

}
function buscarAnomodelo() {
    // $('#anoModelo').html('')
    var tipe = $('#tipo_veiculo').val()
    var marca = $('#marca').val()
    var modelo = $('#modelo').val()

    if (modelo == 0) {
        alert('Selecione a marca do veiculo')
    }
    else {
        urltratada = BaseUrlApi + tipe + '/brands/' + marca + '/models/' + modelo + '/years';
        console.log(urltratada)
        // $('#anoModelo').html('')

        $.ajax({
                url: urltratada,
                // crossDomain: true,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    
                    // let anoModelos = data
                    console.log(data)
                    i = 0
                    $.each(data, function (index, element) {
                        Anomodelo = element.name
                        IdAnomodelo = element.code
                       
                        $('#anoModelo').append(`<option value="${IdAnomodelo}">`+ Anomodelo +'</option>');
                        // console.log(element['name']+ 'ID da marca: '+Idmarca)
                    });
                    

                },
                error: function () {
                    console.log("error");
                }
        });
        
       
    }

}

function CaucularDiaria() {
    $('#resultado').html('')
    var tipe = $('#tipo_veiculo').val()
    var marca = $('#marca').val()
    var modelo = $('#modelo').val()
    
    let anoModelo = $('#anoModelo').val()
    let numeroDias = $('#numeroDias').val()
    
    if (numeroDias == '') {
        alert('Selecione a quantidade de dias')
    }

    if (anoModelo == 0) {
        alert('Selecione o ano do veiculo')
    }
    else {
        urltratada = BaseUrlApi + tipe + '/brands/' + marca + '/models/' + modelo + '/years/' + anoModelo ;
        console.log(urltratada)
        $.ajax({
                url: urltratada,
                // crossDomain: true,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log(data)

                    let valorFipe = data['price']
                    let marca = data['brand']
                    let modelo = data['model']
                    let ano = data['modelYear']
                    let combustivel = data['fuel']
                    
                    var er = /[^a-z0-9]/gi;
                    texto = valorFipe.replace(er, "");
                    texto = texto.replace('R', "");
                    valorFipetratado = parseInt(texto)

                    ValorDiaria = valorFipetratado * 0.005 
                    ValorDiaria = ValorDiaria / 100
                    
                    ValorTotal = ValorDiaria * parseInt(numeroDias)
    
                    ValorTotall = parseFloat(ValorTotal.toFixed(2))

                    $('#resultado').append(`
                        <h3>VALOR DA TOTAL DO ALUGUEL</h3>
                        <h4>R$${ValorTotall}</h4>
                        <img src="../imagens/imgcarro.png" alt="">
                        <p>Marca: ${marca}</p>
                        <p>Modelo: ${modelo}</p>
                        <p>Fipe: ${valorFipe}</p>
                        <p>Ano: ${ano}</p>
                        <p>Combustivel: ${combustivel}</p>
                    `)
                    
    

                    console.log(ValorDiaria)
                    
                },
                error: function () {
                    console.log("error");
                }
        });
    }


}
