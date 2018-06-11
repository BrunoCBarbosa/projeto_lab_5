var recebimentos = []
var pagamentos = []

loadDataFromPagamento()
loadDataFromRecebimento()
populateTable()

function populateTable() {
    var tdReceita = document.getElementById('receita')
    var tdDespesa = document.getElementById('despesa')
    var tdSaldo = document.getElementById('saldo')
    var receitaVal = receita()
    var despesaVal = despesa()

    tdReceita.innerHTML = 'R$ ' + receitaVal
    tdDespesa.innerHTML = 'R$ ' + despesaVal
    tdSaldo.innerHTML = 'R$ ' + saldo(receitaVal, despesaVal)

}

function receita() {
    var cont = 0
    for (var i = 0; i < recebimentos.length; i++) {
        var recebimento = recebimentos[i]

        cont += parseFloat(recebimento.valor)
    }

    return cont
}

function despesa() {
    var cont = 0
    for (var i = 0; i < pagamentos.length; i++) {
        var pagamento = pagamentos[i]

        cont += parseFloat(pagamento.valor)
    }

    return cont
}

function saldo(receita, despesa) {
    return receita - despesa
}

function loadDataFromPagamento() {
    var pagamentoSaved = localStorage.getItem("Pagamentos")
    if (pagamentoSaved) {
        pagamentos = JSON.parse(pagamentoSaved)
    }
}

function loadDataFromRecebimento() {
    var recebimentoSaved = localStorage.getItem("Recebimentos")
    if (recebimentoSaved) {
        recebimentos = JSON.parse(recebimentoSaved)
    }
}