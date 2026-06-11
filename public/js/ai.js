window.addEventListener("DOMContentLoaded", () => {
  const aiPanel = document.getElementById("aiPanel");
  const aiHeader = document.getElementById("aiHeader");

  makeWindowDraggable(aiPanel, aiHeader);
});
document.getElementById("aiCloseBtn").addEventListener("click", () => {
  document.getElementById("aiPanel").style.display = "none";
});
const aiToggle = document.getElementById("aiToggle");
const aiPersonaSelect = document.getElementById("aiPersonaSelect");
const aiInput = document.getElementById("aiInput");
const aiOutput = document.getElementById("aiOutput");
aiToggle.addEventListener("change", () => {
  const enabled = aiToggle.checked;

  socket.emit("ai:updateSetting", {
    aiEnabled: enabled
  });

  if (!enabled) {
    aiOutput.innerHTML += `<div style="color:#888;">AIは現在OFFです。</div>`;
  }
});
aiPersonaSelect.addEventListener("change", () => {
  const persona = aiPersonaSelect.value;

  socket.emit("ai:updateSetting", {
    persona: persona
  });

  aiOutput.innerHTML += `<div style="color:#8cf;">AI人格を「${persona}」に変更しました。</div>`;
});
aiInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const text = aiInput.value.trim();
    if (!text) return;

    aiOutput.innerHTML += `<div class="user-msg">${text}</div>`;
    aiInput.value = "";

    socket.emit("ai:message", { text });
  }
});
socket.on("ai:response", data => {
  aiOutput.innerHTML += `<div class="ai-msg">${data.text}</div>`;
  aiOutput.scrollTop = aiOutput.scrollHeight;
});
socket.on("ai:response", data => {
  const msg = document.createElement("div");
  msg.className = "ai-msg";
  msg.textContent = data.text;

  aiOutput.appendChild(msg);

  // 自動スクロール
  aiOutput.scrollTop = aiOutput.scrollHeight;
});
