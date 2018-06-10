var pagamentos = []
var planos = []

loadDataFromPlano()

salvar();

function salvar() {
    var button = document.getElementById('btnSalvar_pag');
    button.onclick = function() {
        addPagar();
    };
}

function addPagar() {
    var inputNumero = document.getElementById('numero_pag');
    var inputPlano = document.getElementById('planoContas_pag');
    var inputDescricao = document.getElementById('descricao_pag');
    var inputValor = document.getElementById('valor_pag');
    // var inputSituacao = document.getElementById('situacao_pag').childNodes[1]

    var pagamento = {
        numero: inputNumero.value,
        plano: inputPlano.value,
        descricao: inputDescricao.value,
        valor: inputValor.value,
        // situacao: inputSituacao.value
    };
    pagamentos.push(pagamento)

    saveLocalStorage()

}

function populateSelect() {
    var select = document.getElementById('planoContas_pag')

    for (var i = 0; i < planos.length; i++) {
        var plano = planos[i]
        var option = document.createElement('option')

        option.value = plano.categoria
        option.innerHTML = option.value

        select.appendChild(option)
    }
}

function saveLocalStorage() {
    var data = JSON.stringify(pagamentos)
    localStorage.setItem("Pagamentos", data)
}

function loadDataFromPlano() {
    var planoSaved = localStorage.getItem("Planos")
    if (planoSaved) {
        planos = JSON.parse(planoSaved)
        populateSelect()
    }
}