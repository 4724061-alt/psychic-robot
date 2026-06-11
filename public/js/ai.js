document.getElementById("aiInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const text = e.target.value;
    socket.emit("ai:request", { text });
    e.target.value = "";
  }
});
