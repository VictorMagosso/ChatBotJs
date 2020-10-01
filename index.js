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

            const options = [
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

            options.map(item => {
                let option = document.createElement('button');
                let options = document.querySelector('#options');
                option.textContent = item.title;
                options.appendChild(option);
        }
    )}
});