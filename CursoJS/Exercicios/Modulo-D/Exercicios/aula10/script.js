function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = (document.getElementById('txtano').value)
    var res = document.getElementById('res')

    if ((ano < Fano) || (Fano.length == 0)) {
        alert(`[ERRO] Fomato de ano de nascimento invalido!`)
    } else {
        var idade = ano - Number(Fano)
        var Fsex = document.getElementsByName('radsex')
        var genero = ''
        var faixa_etaria = ''
        

        //Determina o Genero do usuario
        if (Fsex[0].checked) {
            genero = 'Homem'
        } else if (Fsex[1].checked) {
            genero = 'Mulher'
        }

        //Determina a Faixa Etaria do usuario
        if (idade > 60) {
            faixa_etaria = 'Idoso'
        } else if (idade > 21){
            faixa_etaria = 'Adulto'
        }else if (idade > 10){
            faixa_etaria = 'Adolecente'
        }else{
            faixa_etaria = 'Criança'
        }

        //Determina a imagem com base no genero e na faixa etaria do usuario
        switch(true){
            case ((genero == 'Homem') && (faixa_etaria == 'Criança')):
                res.innerHTML = '<img src="imagem/homem-criança.png" alt="">'
                break
            case ((genero == 'Homem') && (faixa_etaria == 'Adolecente')):
                res.innerHTML = '<img src="imagem/homem-adolecente.png" alt="">'
                break
            case ((genero == 'Homem') && (faixa_etaria == 'Adulto')):
                res.innerHTML = '<img src="imagem/homem-adulto.png" alt="">'
                break
            case ((genero == 'Homem') && (faixa_etaria == 'Idoso')):
                res.innerHTML = '<img src="imagem/homem-idoso.png" alt="">'
                break
            case ((genero == 'Mulher') && (faixa_etaria == 'Criança')):
                res.innerHTML = '<img src="imagem/mulher-criança.png" alt="">'
                break
            case ((genero == 'Mulher') && (faixa_etaria == 'Adolecente')):
                res.innerHTML = '<img src="imagem/mulher-adolecente.png" alt="">'
                break
            case ((genero == 'Mulher') && (faixa_etaria == 'Adulto')):
                res.innerHTML = '<img src="imagem/mulher-adulto.png" alt="">'
                break
            case ((genero == 'Mulher') && (faixa_etaria == 'Idoso')):
                res.innerHTML = '<img src="imagem/mulher-idosa.png" alt="">'
                break
        }
        res.innerHTML += `<br> ${genero} de ${idade} anos`

        res.style.textAlign = 'center'
    }

}