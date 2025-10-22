function goBack(){window.history.back();}
function openChat(){window.location.href="bot.html";}
function openCategory(cat){
  localStorage.setItem("selectedCategory",cat);
  alert("Opening "+cat+" stores nearby (demo only)");
}

/* --- Chatbot Logic --- */
function sendMessage(){
  const input=document.getElementById("userInput");
  const chatBox=document.getElementById("chatBox");
  const text=input.value.trim();
  if(!text)return;

  const user=document.createElement("div");
  user.className="user-msg";
  user.textContent=text;
  chatBox.appendChild(user);
  input.value="";

  setTimeout(()=>{
    const bot=document.createElement("div");
    bot.className="bot-msg";
    bot.textContent="🤖 Got it! This is a demo response for ‘"+text+"’.";
    chatBox.appendChild(bot);
    chatBox.scrollTop=chatBox.scrollHeight;
  },600);
  chatBox.scrollTop=chatBox.scrollHeight;
}
