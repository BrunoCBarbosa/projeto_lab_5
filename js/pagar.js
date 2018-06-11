var pagamentos = []
var planos = []

loadDataFromPlano()
loadDataFromPagamento()
salvar();

function salvar() {
    var button = document.getElementById('btnSalvar_pag');
    button.onclick = function() {
        var inputNumero = document.getElementById('numero_pag');
        var inputPlano = document.getElementById('planoContas_pag');
        var inputDescricao = document.getElementById('descricao_pag');
        var inputValor = document.getElementById('valor_pag');
        // var inputSituacao = document.getElementById('situacao_pag').childNodes[1]
        if (validate(inputNumero) && validate(inputPlano) && validate(inputDescricao) && validate(inputValor)) {
            addPagar(inputNumero, inputPlano, inputDescricao, inputValor);
            clearInput(inputNumero, inputDescricao, inputValor)
        } else {
            alert('Todos os campos devem ser preenchidos!')
        }
    };
}

function addPagar(inputNumero, inputPlano, inputDescricao, inputValor) {

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
        if(plano.tipo == 'despesa'){
            var option = document.createElement('option')

            option.value = plano.categoria
            option.innerHTML = option.value

            select.appendChild(option)
        }
    
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

function loadDataFromPagamento() {
    var pagamentoSaved = localStorage.getItem("Pagamentos")
    if (pagamentoSaved) {
        pagamentos = JSON.parse(pagamentoSaved)
    }
}

function clearInput(inputNumero, inputDescricao, inputValor) {
    inputNumero.value = ''
    inputDescricao.value = ''
    inputValor.value = ''
    location.reload()
}

function validate(field) {
    return field.value.trim() != ''
}