const socket = io();  // ← これが最重要（URLを書かない）

socket.on("connect", () => {
  console.log("connected:", socket.id);
});

// AIウィンドウ用のイベント（STEP8）
socket.on("ai:response", data => {
  const aiOutput = document.getElementById("aiOutput");
  const msg = document.createElement("div");
  msg.className = "ai-msg";
  msg.textContent = data.text;
  aiOutput.appendChild(msg);
  aiOutput.scrollTop = aiOutput.scrollHeight;
});
