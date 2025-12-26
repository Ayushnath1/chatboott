const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chatContainer");

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  const reply = getBotReply(text.toLowerCase());
  typeBotMessage(reply);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function typeBotMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message bot";
  chatBox.appendChild(msg);

  let i = 0;
  const interval = setInterval(() => {
    msg.textContent += text[i];
    i++;
    chatBox.scrollTop = chatBox.scrollHeight;
    if (i === text.length) clearInterval(interval);
  }, 25);
}

function getBotReply(text) {
  if (text.includes("hello") || text.includes("hi")) 
    return "Hello 👋 How can I help you today?";

  if (text.includes("how are you")) 
    return "I'm doing great 😄 Thanks for asking!";

  if (text.includes("who created")) 
    return "I was created by Ayush Nath Tiwari 🚀";

  if (text.includes("what do you do")) 
    return "I answer questions about Ayush and his life 🙂";

  if (text.includes("family")) 
    return "Ayush's family members are: PAPA, MUMMY, ABHINAV and PARI ❤️";

  if (text.includes("pari") && text.includes("class")) 
    return "Pari is studying in 11th class 📚";

  if (text.includes("pari") && text.includes("school")) 
    return "Pari studies at AAtmdeep Vidyalaya 🏫";

  if (text.includes("pari") && text.includes("go")) 
    return "Pari goes to school by bus 🚌";

  if (text.includes("college")) 
    return "Ayush studies at IIPS, DAVV, Indore 🎓";

  if (text.includes("hostel")) 
    return "Ayush lives in RNT Boys Hostel, Indore 🏠";

  if (text.includes("ayush") && text.includes("born")) 
    return "Ayush was born on 6th June 2004 🎂";

  if (text.includes("abhinav") && text.includes("born")) 
    return "Abhinav was born on 8th April 2007 🎉";

  if (text.includes("pari") && text.includes("born")) 
    return "Pari was born on 8th July 2008 🎈";

  return "I’m not sure about that 🤔 Try asking something else.";
}

function quickAsk(text) {
  userInput.value = text;
  sendMessage();
}

function toggleTheme() {
  chatContainer.classList.toggle("dark");
}
