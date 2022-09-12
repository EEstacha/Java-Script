let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)     
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
/*function finalizar() {
    if(valores.length == 0){
        alert('Lista vazia')
    } else {
        let soma = 0
        let tot = valores.length
        let ordemCres = valores.sort(function (a,b) {return a-b})
        for(let pos in valores){
            soma += valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>A Lista tem ${tot} elementos</p>`
        res.innerHTML += `<p>O menor Valor da lista é ${ordemCres[0]}</p>`
        res.innerHTML += `<p>O maior Valor da lista é ${ordemCres[tot - 1]}</p>`
        res.innerHTML += `<p>O Somatório dos números da lista =  ${soma}</p>`
        res.innerHTML += `<p>A Média dos números da lista =  ${soma/tot}</p>`
    }
}*/

function finalizar(){
    if(valores.length == 0){
        alert('Lista vazia')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            soma += valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>A Lista tem ${tot} elementos</p>`
        res.innerHTML += `<p>O menor Valor da lista é ${menor}</p>`
        res.innerHTML += `<p>O maior Valor da lista é ${maior}</p>`
        res.innerHTML += `<p>O Somatório dos números da lista =  ${soma}</p>`
        res.innerHTML += `<p>A Média dos números da lista =  ${soma/tot}</p>`
    }
}