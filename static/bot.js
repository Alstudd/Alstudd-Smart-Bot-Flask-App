// function submitMessage() {
//     var input = document.getElementById("chatbot-input").value;
//     var conversation = document.getElementById("chatbot-conversation");
//     conversation.innerHTML += "<div class='user-message'>" + input + "</div>";
//     document.getElementById("chatbot-input").value = "";
  
//     // Add code here to process the message and generate a response
//     let my_dict = {
//         "hi" : "Hey",
//         "what is your name": "My name is Travis",
//         "how are you" : "I am fine"
//     }
//     let j = 0;
//     for (let i in my_dict)
//     {
//         if (input == i){
//             conversation.innerHTML += "<div class='chatbot-message'>" + my_dict[i] + "</div>";
//         }
//         else {
//             j++;
//         }
//     }
//     if (j == 3) {
//         conversation.innerHTML += "<div class='chatbot-message'>" + "I didn't understand that!" + "</div>";
//     }
// }  


// const conversationElem = document.getElementById('chatbot-conversation');
// const inputElem = document.getElementById('chatbot-input');
const sendBtn = document.getElementById('chatbot-send-btn');

sendBtn.addEventListener('click', function() {
  const message = inputElem.value;
  if (message.trim() === '') {
    return;
  }
});

//   const userMessageElem = createMessageElem('user', message);
//   conversationElem.appendChild(userMessageElem);

//   // Send the message to the server (replace with your own implementation)
//   sendToServer(message)
//     .then(function(response) {
//       const chatbotMessageElem = createMessageElem('chatbot', response);
//       conversationElem.appendChild(chatbotMessageElem);
//     })
//     .catch(function(error) {
//       console.error(error);
//     });

//   inputElem.value = '';
// });

// function createMessageElem(type, message) {
//   const messageElem = document.createElement('div');
//   messageElem.classList.add('chatbot-message');
//   messageElem.classList.add(type + '-message');
//   messageElem.textContent = message;
//   return messageElem;
// }

// function sendToServer(message) {
//     // Define a dictionary of responses
//     const responses = {
//       'hello': 'Hello, how can I help you?',
//       'how are you': 'I am fine, thank you for asking.',
//       'bye': 'Goodbye!',
//       'default': 'I am sorry, I did not understand your message.'
//     };
  
//     // Convert the message to lowercase and remove leading/trailing spaces
//     const cleanedMessage = message.trim().toLowerCase();
  
//     // Look for a matching response
//     const response = responses[cleanedMessage] || responses['default'];
  
//     // Return a Promise that resolves with the response after a short delay (simulating network latency)
//     return new Promise(function(resolve) {
//       setTimeout(function() {
//         resolve(response);
//       }, 500);
//     });
// }
  
function submitMessage() {
  var conversation = document.getElementById("chatbot-conversation");
  var input = document.getElementById("chatbot-input").value;
  conversation.innerHTML += '<div class="messages_item messages_item--visitor">' + ${{answer}} + '</div>'
  conversation.innerHTML += '<div class="messages_item messages_item--operator">' + ${{user-input}} + '</div>'
}