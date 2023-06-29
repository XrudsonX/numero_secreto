function verificaValorChute(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div class= "erro">Valor inválido!</div>'
    }

    if(numeroForaDosLimites(numero)){
        elementoChute.innerHTML += `
            <div class= "erro">Valor inválido: o número secreto precisar estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <div class= "acerto">
            <div>
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroSecreto}</h3>
            </div>
            </div>
        `
        return
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForaDosLimites(numero){
    return numero > maiorValor || numero < menorValor;
}

