var recebimentos = []

loadDataFromPlano()
salvar();

function salvar() {
    var button = document.getElementById('btnSalvar_rec');
    button.onclick = function() {
        addReceber();
    };
}

function addReceber() {
    var inputNumero = document.getElementById('numero_rec');
    var inputPlano = document.getElementById('planoContas_rec');
    var inputDescricao = document.getElementById('descricao_rec');
    var inputValor = document.getElementById('valor_rec');

    var recebimento = {
        numero: inputNumero.value,
        plano: inputPlano.value,
        descricao: inputDescricao.value,
        valor: inputValor.value
    };

    recebimentos.push(pagamento)
    saveLocalStorage()
}

function populateSelect() {
    var select = document.getElementById('planoContas_rec')

    for (var i = 0; i < planos.length; i++) {
        var plano = planos[i]
        var option = document.createElement('option')

        option.value = plano.categoria
        option.innerHTML = option.value

        select.appendChild(option)
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