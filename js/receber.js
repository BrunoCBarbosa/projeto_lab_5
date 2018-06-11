var recebimentos = []
var planos = []

loadDataFromPlano()
loadDataFromRecebimento()
salvar();

function salvar() {
    var button = document.getElementById('btnSalvar_rec');

    button.onclick = function() {
        var inputNumero = document.getElementById('numero_rec');
        var inputPlano = document.getElementById('planoContas_rec');
        var inputDescricao = document.getElementById('descricao_rec');
        var inputValor = document.getElementById('valor_rec');

        if (validate(inputNumero) && validate(inputDescricao) && validate(inputPlano) && validate(inputValor)) {
            addReceber(inputNumero, inputDescricao, inputPlano, inputValor);
            clearInput(inputNumero, inputDescricao, inputValor)
        } else {
            alert('Todos os campos devem ser preenchidos!')
        }
    };

}

function addReceber(inputNumero, inputDescricao, inputPlano, inputValor) {

    var recebimento = {
        numero: inputNumero.value,
        plano: inputPlano.value,
        descricao: inputDescricao.value,
        valor: inputValor.value
    };

    recebimentos.push(recebimento)
    saveLocalStorage()
}

function populateSelect() {
    var select = document.getElementById('planoContas_rec')

    for (var i = 0; i < planos.length; i++) {
        var plano = planos[i]
        if(plano.tipo == 'receita'){
            var option = document.createElement('option')

            option.value = plano.categoria      
            option.innerHTML = option.value

            select.appendChild(option)
        }
    }
}

function saveLocalStorage() {
    var data = JSON.stringify(recebimentos)
    localStorage.setItem("Recebimentos", data)
}

function loadDataFromPlano() {
    var planoSaved = localStorage.getItem("Planos")
    if (planoSaved) {
        planos = JSON.parse(planoSaved)
        populateSelect()
    }
}

function loadDataFromRecebimento() {
    var recebimentoSaved = localStorage.getItem("Recebimentos")
    if (recebimentoSaved) {
        recebimentos = JSON.parse(recebimentoSaved)
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