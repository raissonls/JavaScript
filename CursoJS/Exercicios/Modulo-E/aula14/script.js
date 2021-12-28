function Contar() {
    let inicio = (document.getElementById('inicio').value)
    let passo = (document.getElementById('passo').value)
    let fim = (document.getElementById('fim').value)
    let res = document.getElementById('contagem')

    if ((inicio.length == 0) || (fim.length == 0) || (passo.length == 0)) {
        res.innerHTML = 'Impossivel contar variaveis invalidas'
    } else if(Number(passo) == 0){
        res.innerHTML = 'Impossivel contar passo zero'
    } else {
        res.innerHTML = `Contando: <br>`;
        let ni = Number(inicio)
        let np = Number(passo)
        let nf = Number(fim)
        
        //MODELO FOR
        if (ni < nf) {
            for (let n = ni; n <= nf; (n += np)) {
                /*Contagem Crescente */
                    res.innerHTML += `${n} \u{1F449} `;
            }
        } else {

            for (let n = ni; n >= nf; (n -= np)) {
                /*Contagem Decrescente */
                    res.innerHTML += `${n} \u{1F449} `;
            }
            res.innerHTML += ` \u{1F3C1}`;
        }
    }
}