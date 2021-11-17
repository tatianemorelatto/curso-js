var agora = new Date() //para pegar a data
var hora = agora.getHours() //para pegar a hora
var minutos = agora.getMinutes() //minutos
console.log(`Agora são exatamente ${hora}:${minutos}`) //verificar como pegar duas casas ecimais
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}