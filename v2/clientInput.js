let mockbigdata = [];

let msg = document.querySelector('#msg');
let chatOutput = document.querySelector('.chat-output');
let chatContainer = document.querySelector('.chat-container');

msg.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        e.preventDefault();
        let output = '';
        output += `<h5>${msg.value}</h5>`;
        mockbigdata.push(msg.value);
        console.log(mockbigdata)
        msg.value = '';
        chatOutput += output;
        chatContainer.appendChild(chatOutput);
    }
});
