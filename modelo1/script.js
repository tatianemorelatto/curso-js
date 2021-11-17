function carregar() { //então essa function vai carregar esses dois itens
    var msg = window.document.getElementById('msg') //pegando o conteudo da div msg e passando pra variavel msg
    var img = window.document.getElementById('imagem') //mesma coisa com a foto
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.` //vai substituir o conteudo de msg por essa mensagem definida aqui
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha1.png'
        document.body.style.background = '#fed9a9'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        document.body.style.background = '#d8a550'
        img.src = 'tarde1.png'
    } else {
        // BOA NOITE
        img.src = 'noite1.png'
        document.body.style.background = '#2d4f58'
    }
}