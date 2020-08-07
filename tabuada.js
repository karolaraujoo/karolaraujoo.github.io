function calcular() {
    var num = document.getElementById('num') // numero dado
    var tab = document.getElementById('seltab') // caixa de text da tabuada
    if (num.value.length == 0) {
        alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE') // se a caixa de text tiver vazia
    } else {
        var n = Number(num.value) // conversão
        var c = 1
        tab.innerHTML = '' // pra limpar quando for fazer outra conta
        while (c <= 10) {
            var item = document.createElement('option') // cração do elemento option
            item.text = `${n} x ${c} = ${n*c}` // calculo que vai aparecer no option
            tab.appendChild(item) // vai aparecer o item na caixa de text
            c++ // adiciona 1 para os proximos calculos
        }
    }
}
