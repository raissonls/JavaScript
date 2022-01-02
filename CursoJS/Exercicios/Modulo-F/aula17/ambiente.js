function parimpar(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return (n*fatorial(n-1))
    }
}

let numero = 40
console.log(`Numero definido é ${numero}`)
let fatnumero = fatorial(numero)
console.log(`Fatorial do numero ${numero} é ${fatnumero}`)

console.log(`O numero ${fatnumero} é ${parimpar(fatnumero)}`)