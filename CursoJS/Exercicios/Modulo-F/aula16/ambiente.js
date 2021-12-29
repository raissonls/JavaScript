/*let num = [5, 8, 3]

num[3] = 6

num.push(8)

console.log(num)

plot_array(num)

num.push(1)

num.sort()

console.log(num)

plot_array(num)

function plot_array(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}
*/
let exemplo = [4,8,9,8,2,1,4,5,7,6]

console.log(exemplo)

for(let pos in exemplo){
    console.log(exemplo[pos])
}
let posição = exemplo.indexOf(10)

if(posição == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`Valor esta na posição ${posição}`)
}
