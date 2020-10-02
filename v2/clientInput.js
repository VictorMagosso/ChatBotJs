let mockbigdata = [];

let msg = document.querySelector('#msg');
const chatOutput = document.querySelector('.chat-output');
const chatContainer = document.querySelector('.chat-container');

msg.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        e.preventDefault();
        let output = '';
        output += `<h5>${msg.value}</h5>`;
        chatOutput.innerHTML += output;
        mockbigdata.push(msg.value);
        console.log(mockbigdata)
        chatContainer.appendChild(chatOutput);
    }
});
