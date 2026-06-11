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
