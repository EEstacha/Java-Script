var idade = 30
var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
if(idade<16) {
    console.log('Não vota')
}else if(idade<18 || idade>65) {
    console.log('voto Opcional')
}else {
    console.log('Voto Obrigatório')
}
console.log(`Agora são exactamente ${horas} Hr ${minutos} Min`)
if(horas>3 && horas<12){
    console.log('Bom Dia')
}else if(horas>=12 && horas<18){
    console.log('Boa tarde')

}else if(horas>18 && horas<=24){
   console.log('Boa Noite')
}else if(horas<=3){
    console.log('Boa Madrugada')
}else{
    console.log('Hora Invalida')
}