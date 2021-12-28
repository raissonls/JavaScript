var n = 1;
var Taboada = 6


console.log('Teste com while:')

while (n<=10){
    console.log(`${Taboada} * ${n} = ${n*Taboada}`)
    n++
}

n=1;
console.log('\nTeste com do while:')

do{
    console.log(`${Taboada} * ${n} = ${n*Taboada}`)
    n++
}while(n<=10)

console.log('\nTeste com for:')
n=1;

for(let n = 1; n<=10 ; n++){
    console.log(`${Taboada} * ${n} = ${n*Taboada}`)
}

