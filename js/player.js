var audio = document.querySelector("audio");
var botaoPlay = document.querySelector(".botao-play");

botaoPlay.onclick = function() {
      if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.onplay = function () {
    console.log("Deu Play!!!");
}

audio.onpause = function () {
    console.log("Deu Pause!!!");
}

audio.ontimeupdate = function () {
    console.log(audio.currentTime);
}

// var porcentagem;

// audio.ontimeupdate = function () {
//     console.log(audio.currentTime);
//     if (audio.play) {
//         porcentagem = (audio.currentTime / audio.duration) * 100;
//         document.querySelector(".tocado").style.width = porcentagem + "%";
//     }
// }

audio.ontimeupdate = function() {
    var porcentagem = (audio.currentTime / audio.duration) * 100;
    var tocado = document.querySelector(".tocado");
    tocado.style.width = porcentagem + "%";

    var duracaoAtual = Math.round(audio.currentTime);
    var spanTempoAtual = document.querySelector(".tempo-atual");
    
    var data = new Date(2017, 0, 1);
    data.setSeconds(duracaoAtual);

    spanTempoAtual.innerText = data.getMinutes().toString().padStart(2, "0") + ":" + data.getSeconds().toString().padStart(2, "0");
}

