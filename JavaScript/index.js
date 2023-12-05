document.addEventListener('DOMContentLoaded', function () {
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

        meuInput.addEventListener('input', function () {
            localStorage.setItem('meuInputValue', meuInput.value);
        });

        let valorSalvo = localStorage.getItem('meuInputValue');
        if (valorSalvo) {
            meuInput.value = valorSalvo;
        }
    }

    let contador = 1; // Mover a definição do contador para fora do evento

    meuInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let main = document.querySelector('main');
            let existingContainer = main.querySelector('.btn2');

            if (contador < 2) {
                // Se já existe um contêiner, substituir o conteúdo
                let p = document.createElement('p');
                p.style.fontSize = '1rem';
                p.textContent = meuInput.value;

                existingContainer.innerHTML = ''; // Limpar conteúdo existente
                existingContainer.appendChild(p);
                contador += 1;
            } else {
                // Se não existe um contêiner, criar um novo
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
                contador += 1; // Resetar o contador quando um novo contêiner é criado
            }

            meuInput.value = '';
        }

    });
});
