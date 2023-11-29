document.addEventListener("DOMContentLoaded", function(){
    let caixaDeMensagens = document.getElementsByTagName("main")[0];
    let TextoEscrito = document.getElementsByClassName("inputbox");

        let inputbox = TextoEscrito[0];
        inputbox.addEventListener("keypress", function(event){
            if (event.key === 'Enter') {
                AddMessage();
            }
        });


    // Abaixo está nossa função que adiciona a mensagem à conversa

    function AddMessage() {
        var mensagem = inputbox.value;
        if (mensagem.trim() !== "") {
            let balaoMensagem = document.createElement("div");
    
            // Aqui você pode escolher entre btn1 e btn2 dependendo da lógica da sua aplicação
            // Por exemplo, se todas as mensagens forem tratadas como enviadas, use btn1
            balaoMensagem.classList.add("btn2"); // Ou "btn2", conforme a necessidade
    
            balaoMensagem.innerText = mensagem;
    
            caixaDeMensagens.appendChild(balaoMensagem);
            inputbox.value = "";
        }
    }
    
}
);
