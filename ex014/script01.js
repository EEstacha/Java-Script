function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(anoNasc.value.length == 0 || Number(anoNasc.value>ano)){
        window.alert('[Error] Verifique os dados e tente novamente')
    } else{
        var idade = ano - anoNasc.value
        var sexo = document.getElementsByName('radSex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Masculino'
            if(idade<=13){
                img.setAttribute('src', 'imagens/menino.png')
                res.innerHTML = `Detectamos uma criança de Gênero ${genero}, com ${idade} anos idade`
                res.appendChild(img)
            } else if(idade>13 && idade<25){
                 img.setAttribute('src', 'imagens/jovem.masc.png')
                res.innerHTML = `Detectamos um Jovem de Gênero ${genero}, com ${idade} anos idade`
                res.appendChild(img)
            }else if(idade>=25 && idade<60){
                img.setAttribute('src', 'imagens/adulto.png')
                res.innerHTML =`Detectamos um Adulto de Gênero ${genero}, com ${idade} anos idade`
                res.appendChild(img)
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
                res.innerHTML = `Detectamos um Idoso de Gênero ${genero}, com ${idade} anos idade`
                res.appendChild(img)
            }
        }else if(sexo[1].checked){
            genero = 'Feminino'
            if(idade<=13){
                 img.setAttribute('src', 'imagens/menina.png')
                res.innerHTML = `Detectamos uma criança de Gênero ${genero}, com ${idade} anos de idade`
                 res.appendChild(img)
            } else if(idade>13 && idade<25){
                 img.setAttribute('src', 'imagens/jovem.fem.png')
                res.innerHTML = `Detectamos um Jovem de Gênero ${genero}, com ${idade} anos idade`
                 res.appendChild(img)
            }else if(idade>=25 && idade<60){
                 img.setAttribute('src', 'imagens/adulta.png')
                res.innerHTML =`Detectamos um Adulto de Gênero ${genero}, com ${idade} anos idade`
                 res.appendChild(img)
            }else{
                 img.setAttribute('src', 'imagens/idosa.png')
                res.innerHTML = `Detectamos um Idoso de Gênero ${genero}, com ${idade} anos idade`
                 res.appendChild(img)
            }
        }
       
    }
}