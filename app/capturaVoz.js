const elementoChute = document.getElementById('chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeNaTela(chute)
    verificaValorChute(chute);
}

function exibeNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}