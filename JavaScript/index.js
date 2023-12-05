document.addEventListener('DOMContentLoaded', function () {
    let meuInput = document.querySelector("body > footer > ul > li > input");

    if (meuInput) {
        meuInput.id = "seuInputId";
        meuInput.name = "seuInputName";
        meuInput.autocomplete = "off";

        meuInput.addEventListener('input', function () {
            localStorage.setItem('meuInputValue', meuInput.value);
            console.log('Valor do input atualizado:', meuInput.value);
        });

        let valorSalvo = localStorage.getItem('meuInputValue');
        if (valorSalvo) {
            meuInput.value = valorSalvo;
        }
    }

    meuInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let ul = document.createElement('ul');
            ul.className = 'btn2';
            let p = document.createElement('p');
            p.style.fontSize = '1rem';
            p.textContent = meuInput.value;
            ul.appendChild(p);
            document.querySelector('main').appendChild(ul);
            ul.style.position = 'absolute';
            ul.style.top = '20rem';
            ul.style.left = '15.5rem';
            meuInput.value = '';
            p = '';
        }
    });
});
