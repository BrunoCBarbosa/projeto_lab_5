var planos = []

loadDataFromPlano()
salvar();

function salvar() {
    var button = document.getElementById('btnSalvar_plano');
    button.onclick = function() {
        var inputCategoria = document.getElementById('categoria');
        var inputTipo = document.getElementById('tipo');
        if (validate(inputCategoria) && validate(inputTipo)) {
            addPlanoContas(inputCategoria, inputTipo);
            clearInput(inputCategoria, inputTipo)
        } else {
            alert('Todos os campos devem ser preenchidos!')
        }
    };
}

function addPlanoContas(inputCategoria, inputTipo) {

    var plano = {
        categoria: inputCategoria.value,
        tipo: inputTipo.value
    };

    planos.push(plano)
    saveLocalStorage()

}

function loadDataFromPlano() {
    var planoSaved = localStorage.getItem("Planos")
    if (planoSaved) {
        planos = JSON.parse(planoSaved)
    }
}

function saveLocalStorage() {
    var data = JSON.stringify(planos)
    localStorage.setItem("Planos", data)
}

function validate(field) {
    return field.value.trim() != ''
}

function clearInput(inputCategoria, inputTipo) {
    inputCategoria.value = ''
    inputTipo.value = ''
    location.reload()
}