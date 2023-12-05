document.addEventListener('DOMContentLoaded', function () {
    //Faces
    var renato = document.querySelector("img.renato");
    var fabio = document.querySelector("img.fabio");
    var joao = document.querySelector("img.joao");

    if (renato) {
        renato.setAttribute('src', './imagens/Renato-Perfil.png');
    }

    if (fabio) {
        fabio.setAttribute('src', './imagens/Fabio-Perfil.png');
    }

    if (joao) {
        joao.setAttribute('src', './imagens/Joao-Perfil.png');
    }

    // Sino
    let mode = document.querySelector('.sino');
    if (mode) {
        mode.setAttribute('src', './imagens/bell_off.png');
        mode.addEventListener('click', function (event) {
            if (mode.src.includes("imagens/bell_off.png")) {
                mode.setAttribute('src', './imagens/bell_on.png');
            } else {
                mode.setAttribute('src', "./imagens/bell_off.png");
            }
        });
    }

    let meuInput = document.querySelector("body > footer > ul > li > input");

    if (meuInput) {
        meuInput.id = "seuInputId";
        meuInput.name = "seuInputName";
        meuInput.autocomplete = "off";


        let valorSalvo = localStorage.getItem('meuInputValue');

        if (valorSalvo) {

            meuInput.value = valorSalvo;
        }

        meuInput.addEventListener('input', function () {

            localStorage.setItem('meuInputValue', meuInput.value);
        });

        window.addEventListener('beforeunload', function () {
            localStorage.removeItem('meuInputValue');
        });
    }

    let contador = 1;

    meuInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let main = document.querySelector('main');
            let existingContainer = main.querySelector('.btn2');

            if (contador < 2) {
                let p = document.createElement('p');
                p.style.fontSize = '1rem';
                p.textContent = meuInput.value;

                existingContainer.innerHTML = '';
                existingContainer.appendChild(p);
                contador += 1;
            } else {
                let ul = document.createElement('ul');
                ul.className = 'btn2';
                let p = document.createElement('p');
                p.style.fontSize = '1rem';
                p.textContent = meuInput.value;
                ul.appendChild(p);
                main.appendChild(ul);
                ul.style.position = 'absolute';
                ul.style.top = '20rem';
                ul.style.left = '15.5rem';
                contador += 1;
            }

            meuInput.value = '';
        }
    });

});
