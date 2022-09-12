function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Error] verifique os dados')
    }else{
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('[Error] Passo inválido')
        }
        if(i<f){
            for(var c=i; c<=f; c+=p){
           
                res.innerHTML += `${c} \u{1f449}`
            }

        }else{
             for(var c=i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1f449}`
             }
        }
       
    } res.innerHTML += `\u{1f3c1}`
}