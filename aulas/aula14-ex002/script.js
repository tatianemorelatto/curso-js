function calcular() {
    let tabuada = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (tabuada.value.length == 0) {
        window.alert('Preencha um valor corretamente')
    } else {
        let tab = Number(tabuada.value)
        res.innerHTML = ` ` //para limpar o formulário assim que iniciar, se inserir outro número para calcular, ele vai limpar as informações anteriores e escrever novamente
        for (let c = 0; c <= 10; tab * c) {
            let item = document.createElement('option') // Para criar um elemento dentro de JS (com nome de option nesse caso)
            item.text = `${tab} x ${c} = ${tab*c}` // colocando o resultado dentro do select que está no HTML
            item.value = `tab${c}` // criando um value para o option pois é necessário ele ter um value para cada linha
            res.appendChild(item) //para fazer tudo aparecer é necessário adicionar um elemento filho que vai ser o item
            c++

        }
    }
}