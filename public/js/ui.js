const panel = document.getElementById("aiPanel");
const header = document.getElementById("aiHeader");

let offsetX = 0;
let offsetY = 0;
let dragging = false;

header.addEventListener("mousedown", e => {
  dragging = true;
  offsetX = e.clientX - panel.offsetLeft;
  offsetY = e.clientY - panel.offsetTop;
});

document.addEventListener("mousemove", e => {
  if (dragging) {
    panel.style.left = (e.clientX - offsetX) + "px";
    panel.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  dragging = false;
});
