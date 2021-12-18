function Carregar(){
    var corpo = window.document.body
    var msg = window.document.querySelector('#msg')
    var imagem = window.document.querySelector('#imagem')
    var data = new Date()
    var hora =data.getHours()
    var min = data.getMinutes()

    if (min<=9) {
        msg.innerHTML = `Agora são ${hora}:0${min}`
    } else {
        msg.innerHTML = `Agora são ${hora}:${min}`    
    }
    

    if ((hora>=0) & (hora<12)) {
        //BOM DIA
        imagem.src = 'imagens/manha-redondo-250px.png'
        corpo.style.background = 'rgb(138, 145, 247)'
        
    } else if((hora>=12)&(hora<18)){
        //BOA TARDE
        imagem.src = 'imagens/tarde-redondo-250px.png'
        corpo.style.background = 'rgba(182, 139, 59, 0.685)'


    }else{
        //BOA NOITE
        imagem.src = 'imagens/noite-redondo-250px.png'
        corpo.style.background = 'rgba(42, 13, 116, 0.856)'

    }

    atualização_automatica(60000);
}

function atualização_automatica(timeoutPeriod){
	setTimeout("location.reload(true);",timeoutPeriod);
}
