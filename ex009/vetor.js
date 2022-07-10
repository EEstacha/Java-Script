let valores = [8, 1, 5, 3, 7]
console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])

for(let pos=0; pos<valores.length; pos++){
    console.log(`Na posição ${pos} tem o numero ${valores[pos]}`)
}

for(let pos in valores){
    console.log(`Na posição ${pos} está o numero ${valores[pos]}`)
}
let pos = valores.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)