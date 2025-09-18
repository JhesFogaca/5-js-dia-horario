function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saud = window.document.getElementById('saudacao')
    var data = new Date()
    //var hora = data.getHours()
    //var hora = data.toLocaleTimeString() //traz a hora em minutos
    var hora = Math.floor(Math.random()*23) //troca a hora a cada atualiza
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = './img/dia.png'
        document.body.style.background = '#fbb55c'
        saud.innerText = 'Bom dia!'
        msg.style.color = 'black'
        saud.style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = './img/tarde.png'
        document.body.style.background = '#e0d7d7'
        saud.innerText = 'Boa Tarde!'
        msg.style.color = 'black'
        saud.style.color = 'black'
    } else {
        //Boa noite!
        img.src = './img/noite.png'
        document.body.style.background = '#242b2e'
        saud.innerText = 'Boa Noite!'

    }
}