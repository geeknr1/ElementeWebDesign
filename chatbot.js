document.getElementById('chat-button').addEventListener('click', function() {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim() === '') return;  // Ignore empty input

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    const botResponse = getBotResponse(userInput);
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerText = botResponse;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById('chat-input').value = '';
});

document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        document.getElementById('chat-button').click();
    }
});

function getBotResponse(input) {
    input = input.toLowerCase().trim();
    // Add your chatbot's response logic here
    switch(input) {
        case "hello":
            return 'Hi there!';
        case 'how are you?':
            return "I'm doing well, thank you!";
        case 'i need help':
            return 'How may I help you today?';
        default:
            return "I don't understand that.";
    }
}