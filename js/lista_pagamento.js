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
        // tdSituacao.id = 'situacao'


        tdDescricao.innerHTML = pagamento.descricao
        tdPlano.innerHTML = pagamento.plano
        tdValor.innerHTML = pagamento.valor
            // tdSituacao.innerHTML = pagamento.situacao
            // tdFinalizar.innerHTML

        // tdFinalizar.appendChild(createButtonElement())
        // tdFinalizar.childNodes[0].innerHTML = "Finalizar"
        // tdFinalizar.onclick = function(){
        //  var t =    finalizar(pagamento.numero,pagamento.descricao,pagamento.valor,pagamento.plano,pagamento.situacao,i)
        // pagamentos[i].push(t)
        // saveLocalStorage(i)


             // localStorage.setItem(pagamentos[i],t)

        // }
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
//     var button = document.createElement('input')
//     button.className = 'btn btn-success'
//     button.id = 'finalizar_pagamento'
//     button.type = 'button'
//     button.value = 'Finalizar'
//     button.onclick = finalizar


//     return button
// }

// function finalizar(numero,descricao,valor,plano,situacao,i){
//  var pagamento = {
//         numero: numero,
//         plano: plano,
//         descricao: descricao,
//         valor: valor,
//         situacao: 'pago'
//     };
//     return pagamento
// }

// function saveLocalStorage(i) {
//     var data = JSON.stringify(pagamentos[i])
//     localStorage.setItem("Pagamentos", data)
// }