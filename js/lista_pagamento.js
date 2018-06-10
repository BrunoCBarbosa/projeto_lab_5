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
            // var tdSituacao = document.createElement('td')
            // var tdFinalizar = document.createElement('td')


        tdDescricao.innerHTML = pagamento.descricao
        tdPlano.innerHTML = pagamento.plano
        tdValor.innerHTML = pagamento.valor
            // tdSituacao.innerHTML = pagamento.situacao
            // tdFinalizar.innerHTML

        // tdFinalizar.appendChild(createButtonElement())
        // tdFinalizar.childNodes[0].innerHTML = "Finalizar"
        tr.appendChild(tdDescricao)
        tr.appendChild(tdPlano)
        tr.appendChild(tdValor)
            // tr.appendChild(tdSituacao)
            // tr.appendChild(tdFinalizar)

        table.tBodies[0].appendChild(tr)
    }

}

function loadDataFromPagamento() {
    var pagamentoSaved = localStorage.getItem("Pagamentos")
    if (pagamentoSaved) {
        pagamentos = JSON.parse(pagamentoSaved)
    }
}

function createTableData(content) {
    var td = document.createElement('td')
    td.innerHTML = content
    return td
}

// function createButtonElement() {
//     var button = document.createElement('button')
//     button.className = 'btn btn-success'
//     button.id = 'finalizar_pagamento'


//     return button
// }