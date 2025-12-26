const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const typing = document.getElementById("typing");

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";
    botReply(text);
  }, 800);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText) {
  let reply = "I'm not sure I understand 🤔";

  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello! 😊 Nice to meet you!";
  } 
  else if (text.includes("how are you")) {
    reply = "I'm doing great! Thanks for asking 😄";
  }
  else if (text.includes("your name")) {
    reply = "I'm your friendly chatbot 🤖";
  }
  else if (text.includes("bye")) {
    reply = "Goodbye! 👋 Have a great day!";
  }
  else if (text.includes("help")) {
    reply = "Sure! Tell me what you need help with 🙂";
  }

  addMessage(reply, "bot");
}

// Send message on Enter key
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
