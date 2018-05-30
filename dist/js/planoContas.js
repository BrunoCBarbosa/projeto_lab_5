salvar();

function salvar() {
    var button = document.getElementById('btnSalvar');
    button.onclick = function() {
        addPlanoContas();
    };
}

function addPlanoContas(){
    var inputCategoria = document.getElementById('categoria');
    var inputTipo = document.getElementById('tipo');
    
    console.log(inputTipo.value);
}