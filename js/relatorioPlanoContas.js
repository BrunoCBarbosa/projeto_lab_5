var planoContas = [];
var pagamentos = [];
var recebimentos = [];

loadDataFromPagamento();
loadDataFromRecebimento();
loadDataFromPlanoContas();
populateTable();

function populateTable() {
    var tabela = document.getElementById('relatorio_plano');
    for (var i = 0; i < planoContas.length; i++) {
        var plano = planoContas[i];
        totalPlano = calculaPlano(plano);
        
        var tr = document.createElement('tr');
        var tdCategoria = document.createElement('td');
        var tdTipo = document.createElement('td');
        var tdTotal = document.createElement('td');
        
        tdCategoria.innerHTML = plano.categoria;
        tdTipo.innerHTML = plano.tipo;
        tdTotal.innerHTML = 'R$ ' + totalPlano;
        
        tr.appendChild(tdCategoria);
        tr.appendChild(tdTipo);
        tr.appendChild(tdTotal);
        
        tabela.tBodies[0].appendChild(tr);
    }
}

function calculaPlano(plano) {
    var valor = 0;
    if(plano.tipo == 'receita'){
        for (var i = 0; i < recebimentos.length; i++) {
            var recebimento = recebimentos[i];

            valor += parseFloat(recebimento.valor);
        }
    }else{
        for (var i = 0; i < pagamentos.length; i++) {
            var pagamento = pagamentos[i];

            valor += parseFloat(pagamento.valor);
        }
    }
    return valor;
}

function loadDataFromPagamento() {
    var pagamentoSaved = localStorage.getItem("Pagamentos");
    if (pagamentoSaved) {
        pagamentos = JSON.parse(pagamentoSaved);
    }
}

function loadDataFromRecebimento() {
    var recebimentoSaved = localStorage.getItem("Recebimentos");
    if (recebimentoSaved) {
        recebimentos = JSON.parse(recebimentoSaved);
    }
}

function loadDataFromPlanoContas() {
    var planosSaved = localStorage.getItem("Planos");
    if (planosSaved) {
        planoContas = JSON.parse(planosSaved);
    }
}


