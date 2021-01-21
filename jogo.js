
// encontrar altura e largura
// convem por dentro de uma função, pois o usuario pode aumentar e diminuir a tela

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaBozoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500
	criaBozoTempo = 1500
} else if (nivel === 'medio') {
	//1000
	criaBozoTempo = 1000
} else if (nivel === 'dificil') {
	//750
	criaBozoTempo = 850
}

function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight
	largura = window.innerWidth
	
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0) {
		clearInterval (cronometro)
		clearInterval (criaBozo)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

// função criada para ser chamada no html (pois como se trata do body e o js esta no head, quando ele lê, o body ainda nao existe)

function posicaoRandomica(){

	//remover mosquito anterios (caso existe - primeiro nao tem)
	if (document.getElementById('bozo')) {
		document.getElementById('bozo').remove()

		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'

		} else {
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
		
		vidas++
	 }
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX //exclui a possibilidade de criar posições negativas
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar elemento html
	var bozo = document.createElement('img')
	bozo.src = 'imagens/bozo.png'
	bozo.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	bozo.style.left = posicaoX + 'px'
	bozo.style.top = posicaoY + 'px'
	bozo.style.position = 'absolute'
	bozo.id = 'bozo'
	bozo.onclick = function() {
		this.remove()
	}

	document.body.appendChild(bozo)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'bozo1'

		case 1:
			return 'bozo2'

		case 2:
			return 'bozo3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}