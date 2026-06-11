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
