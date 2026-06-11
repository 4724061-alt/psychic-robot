function makeWindowDraggable(panel, header) {
  let offsetX = 0;
  let offsetY = 0;
  let isDown = false;

  header.addEventListener("mousedown", e => {
    isDown = true;
    offsetX = e.clientX - panel.offsetLeft;
    offsetY = e.clientY - panel.offsetTop;
  });

  document.addEventListener("mousemove", e => {
    if (!isDown) return;
    panel.style.left = (e.clientX - offsetX) + "px";
    panel.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
  });
}

