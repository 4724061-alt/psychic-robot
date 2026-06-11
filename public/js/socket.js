const socket = io();

socket.on("connect", () => {
  console.log("connected:", socket.id);
});

socket.on("ai:response", data => {
  const aiOutput = document.getElementById("aiOutput");
  if (!aiOutput) return;

  const msg = document.createElement("div");
  msg.className = "ai-msg";
  msg.textContent = data.text;

  aiOutput.appendChild(msg);
  aiOutput.scrollTop = aiOutput.scrollHeight;
});
