const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const typing = document.getElementById("typing");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";
    botReply(text.toLowerCase());
  }, 700);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(text) {
  let reply = "Sorry, I don't have information about that 🤔";

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello! 👋 How can I help you?";
  } 
  else if (text.includes("how are you")) {
    reply = "I'm doing great 😄 Thanks for asking!";
  }
  else if (text.includes("who created you")) {
    reply = "I was created by Ayush Nath Tiwari 🚀";
  }
  else if (text.includes("what do you do")) {
    reply = "I answer questions and share information about Ayush 🙂";
  }
  else if (text.includes("ayush family")) {
    reply = "Ayush's family members are: PAPA, MUMMY, ABHINAV and PARI ❤️";
  }
  else if (text.includes("pari") && text.includes("class")) {
    reply = "Pari is studying in 11th class 📚";
  }
  else if (text.includes("pari") && text.includes("school")) {
    reply = "Pari studies at AAtmdeep Vidyalaya 🏫";
  }
  else if (text.includes("pari") && text.includes("go") && text.includes("school")) {
    reply = "Pari goes to school by bus 🚌";
  }
  else if (text.includes("college") && text.includes("ayush")) {
    reply = "Ayush studies at IIPS, DAVV, Indore 🎓";
  }
  else if (text.includes("hostel")) {
    reply = "Ayush lives in RNT Boys Hostel, Indore 🏠";
  }
  else if (text.includes("ayush") && text.includes("born")) {
    reply = "Ayush was born on 6th June 2004 🎂";
  }
  else if (text.includes("abhinav") && text.includes("born")) {
    reply = "Abhinav was born on 8th April 2007 🎉";
  }
  else if (text.includes("pari") && text.includes("born")) {
    reply = "Pari was born on 8th July 2008 🎈";
  }

  addMessage(reply, "bot");
}
