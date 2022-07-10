function parimpar(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}
//let res = parimpar(n)
console.log(parimpar(255))

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(4, 21))