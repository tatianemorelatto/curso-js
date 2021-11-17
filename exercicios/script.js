function carregar() { //então essa function vai carregar esses dois itens
    var msg = window.document.getElementById('msg') //pegando o conteudo da div msg e passando pra variavel msg
    var img = window.document.getElementById('imagem') //mesma coisa com a foto
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` //vai substituir o conteudo de msg por essa mensagem definida aqui
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha1.png'
    } else if (hora >= 12 && hora < 10) {
        //BOA TARDE
        img.src = 'tarde1.png'
    } else {
        // BOA NOITE
        img.src = 'noite1.png'
    }
}