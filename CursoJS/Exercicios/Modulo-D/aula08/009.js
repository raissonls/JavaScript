var idade = 2

if (idade < 16) {
    console.log('Não é votante')
} else if (idade < 18 || idade>=65) {
    console.log('Você pode optar para votar')
} else {
    console.log('Você é votante obrigatorio')
}
