document.addEventListener('DOMContentLoaded', function () {
    //Sino
    let mode = document.querySelector('.sino');
    mode.setAttribute('src', './imagens/bell_off.png');
    mode.addEventListener('click', function (event) {
       if (mode.src.includes("imagens/bell_off.png")) {
           mode.setAttribute('src', './imagens/bell_on.png');
       } else {
            mode.setAttribute('src', "./imagens/bell_off.png");
       }

   });
});
