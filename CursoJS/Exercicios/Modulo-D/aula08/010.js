var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

switch(true){
    case hora >= 18:
        console.log('Boa Noite')
        break;
    case hora >= 12:
        console.log('Boa Tarde')
        break;
    case hora >= 6:
        console.log('Bom Dia')
        break;
    case hora >= 0:
        console.log('Boa Madrugada')
        break;
    default:
        console.log('Você não inseriu o valor de uma hora')
}
