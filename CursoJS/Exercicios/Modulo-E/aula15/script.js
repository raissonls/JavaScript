function CalcularTab(){
    let num = (document.getElementById('txtnum').value)
    let sel = document.getElementById('tabuada')

    if(num.length == 0){
        window.alert('Por favor digite um número')
    }else{
        sel.innerHTML=''
        let n = Number(num)
        for(let i=1;i<=10;i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            sel.appendChild(item)
        }
    }
}
