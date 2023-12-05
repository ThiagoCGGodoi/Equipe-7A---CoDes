document.addEventListener('DOMContentLoaded', function () {
    //Sino ligado
    let mode = document.querySelector('.sino');
    mode.addEventListener('click', function (event) {
       if (mode.src.includes("imagens/bell_off.png")) {
           mode.setAttribute('src', './imagens/bell_on.png');
       } else {
            mode.setAttribute('src', "./imagens/bell_off.png");
       }

   });

});
