var cont = 0;
var vetor = []
var entnum = document.getElementById('txtnum')
var resultado = document.getElementById('res')

function adicionar() {
    let numero = (entnum.value)
    let num = Number(numero)
    let ent = document.getElementById('entrada')

    if ((numero.length == 0) || (num < 1) || (num > 100)) {
        window.alert('Por favor inserir um numero entre 1 e 100')
    } else {
        if (vetor.indexOf(num) == -1) {
            resultado.innerHTML = ''
            vetor.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} Adicionado`
            item.value = `tab ${cont}`
            cont++
            ent.appendChild(item)
        } else {
            window.alert('Valor ja encontrado na lista')
        }
    }
    entnum.value = ''
    entnum.focus()
}


function finalizar() {
    if (vetor.length == 0) {
        window.alert('Por Favor inserir um numero antes de finalizar')
    } else {
        vetor.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })

        let soma = 0

        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i]
        }

        let média = soma / vetor.length


        resultado.innerHTML = `<p>Ao todo temos ${vetor.length} numeros</p>
        <p>O maior valor informado foi ${vetor[(vetor.length) - 1]}</p>
        <p>O menor valor informado foi ${vetor[0]}</p>
        <p>Somando todos os valores temos ${soma}</p>
        <p>A média dos valores digitados é ${média}</p>`
    }
}