function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = 16
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são Exactamente ${hora}h${minutos}min`
    if (hora>=0 && hora<12) {
        img.src = 'imagens/img.manha.jpg'
        document.body.style.background = '#085a7f'
    } else if (hora>=12 && hora<18) {
        img.src = 'imagens/img.tarde.jpg'
        document.body.style.background = '#afb06c'
    } else {
        img.src = 'imagens/img.noite.jpg'
        document.body.style.background = '#30120a'
    }
}