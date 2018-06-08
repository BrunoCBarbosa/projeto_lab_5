var planos = []

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

    var plano = {
    	categoria: inputCategoria.value,
    	tipo: inputTipo.value
    };
    
    planos.push(plano)
    saveLocalStorage()
}

function saveLocalStorage(){
	var data = JSON.stringify(planos)
	localStorage.setItem("Planos", data)
}