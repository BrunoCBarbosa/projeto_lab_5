var pagamentos = []

loadDataFromPagamento()
populateTable()

function populateTable() {
    var table = document.getElementById('lista_despesas')

    for (var i = 0; i < pagamentos.length; i++) {
        var pagamento = pagamentos[i]
        var tr = document.createElement('tr')
        var tdDescricao = document.createElement('td')
        var tdPlano = document.createElement('td')
        var tdValor = document.createElement('td')

        tdDescricao.innerHTML = pagamento.descricao
        tdPlano.innerHTML = pagamento.plano
        tdValor.innerHTML = pagamento.valor

        tr.appendChild(tdDescricao)
        tr.appendChild(tdPlano)
        tr.appendChild(tdValor)

        table.tBodies[0].appendChild(tr)

       
    }

}

function loadDataFromPagamento() {
    var pagamentoSaved = localStorage.getItem("Recebimentos")
    if (pagamentoSaved) {
        pagamentos = JSON.parse(pagamentoSaved)
    }
}

