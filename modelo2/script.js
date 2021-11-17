function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se estiver errado o ano de nascimento será executado isso
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { // se estiver correto será executado esse bloco
        var fsex = document.getElementsByName('radsex') // aqui vai pegar o sexo marcado pelo usuario e passar para variavel fsex
        var idade = ano - Number(fano.value) // aqui ele vai somar o ano de nascimento inserido pelo usuario MENOS o ano atual para saber a idade e armazenará na variavel idade
        var genero = ''
        var img = document.createElement('img') //criando foto dinamicamente pelo JS - estou criando um elemento(tag) img
        img.setAttribute('id', 'foto') //criando um img com o ID foto, mesma coisa se estivesse criando pelo html
        if (fsex[0].checked) { //posição 0 pois o masculino foi digitado primeiro
            //então ele vai analisar se o que estiver marcado for o primeiro, executa o bloco abaixo
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'hbb.png') //podemos criar a imagem pelo HTML ou atrav
                genero = 'Criança'
            } else if (idade < 22) {
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'hadulto.png')
            } else {
                img.setAttribute('src', 'hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mbb.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'madulta.png')
            } else {
                img.setAttribute('src', 'mvelha.png')
            }
        }
        res.style.textAlign = 'center' //centralizando pelo JS mas podemos fazer pelo CSS externo
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}