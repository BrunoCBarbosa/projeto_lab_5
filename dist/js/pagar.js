var pagamentos = []

loadDataFromPlano()

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

    var pagamento = {
    	numero: inputNumero.value,
    	plano: inputPlano.value,
    	descricao: inputDescricao.value,
    	valor: inputValor.value
    };

    pagamentos.push(pagamento)
    saveLocalStorage()
    
}

function populateSelect(){
	var select = document.getElementById('planoContas')

	for(var i = 0; i < planos.length; i++){
		var plano = planos[i]
		var option = document.createElement('option')

		option.value = plano.categoria
		option.innerHTML = option.value

		select.appendChild(option)
	}
}

function saveLocalStorage(){
	var data = JSON.stringify(pagamentos)
	saveLocalStorage.setItem("Pagamentos", data)
}

function loadDataFromPlano(){
	var planoSaved = localStorage.getItem("Planos")
	if(planoSaved){
		planos = JSON.parse(planoSaved)
		populateSelect()
	}
}

