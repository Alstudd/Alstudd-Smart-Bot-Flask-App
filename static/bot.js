const sendBtn = document.getElementById('chatbot-send-btn');

sendBtn.addEventListener('click', function() {
  const message = inputElem.value;
  if (message.trim() === '') {
    return;
  }
});
