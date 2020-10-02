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
            name.value = '';
            name.setAttribute('disabled', 'disabled');

            const optionsData = [{title: 'Produto não chegou'},{title: 'Cancelar compra'},{title: 'Falar com um humano'},{title: 'Mais opções'}]
            const optionsSecondData = [{title: 'Aparece como entregue'},{title: 'Demorou mais do que esperado'}]

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
                   let afterSelected = document.createElement('h5');
                   chatContainer.appendChild(afterSelected);

                   switch (chosenOption.textContent) {
                       case 'Produto não chegou':
                        afterSelected.textContent = 'Escolha qual opção se encaixa melhor';
                        optionsSecondData.map(item => {
                            let optionSecond = document.createElement('button');
                            let optionsSecond = document.querySelector('#optionsSecond');
                            question.classList.add('bot-question-show');
                            document.querySelector('.options').classList.add('options-show');
                            optionSecond.textContent = item.title;
                            optionsSecond.appendChild(optionSecond);
                            });
                        break;
                   }
            });
        }
    )}
});