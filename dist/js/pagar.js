salvar();

function salvar() {
    var button = document.getElementById('btnSalvar');
    button.onclick = function() {
        addPagar();
    };
}

function addPagar(){
    var inputNumero = document.getElementById('numero');
    var inputPlano = document.getElementById('planoContas');
    var inputDescricao = document.getElementById('descricao');
    var inputValor = document.getElementById('valor');
    
    console.log(inputNumero.value);
}


