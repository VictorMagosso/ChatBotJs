const showChat = () => {
    document.querySelector('.chat-box').classList.toggle('chat-open');
}
let name = document.querySelector('#chat-client');
name.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        const clientName = document.querySelector('#client-name').innerHTML = name.value;
            let question = document.querySelector('.bot-question');
            question.innerHTML = `${clientName}, como podemos te ajudar?`;
            question.classList.add('bot-question-show');
            document.querySelector('.options').classList.add('options-show');
            clientName.innerHTML = '';

            const optionsData = [
                {
                    title: 'Produto não chegou', 
                },
                {
                    title: 'Cancelar compra', 
                },
                {
                    title: 'Falar com um humano', 
                },
                {
                    title: 'Mais opções'
                }
            ]

            optionsData.map(item => {
                let option = document.createElement('button');
                let options = document.querySelector('#options');
                option.textContent = item.title;
                options.appendChild(option);

               option.addEventListener("click", () => {
                   let chosenOption = document.createElement('h6');
                   let chatContainer = document.querySelector('#chat-box')
                   chosenOption.textContent = option.textContent;
                    chatContainer.appendChild(chosenOption);
                   console.log(option.textContent)
               })
        }
    )}
});