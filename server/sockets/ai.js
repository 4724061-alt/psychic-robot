module.exports = (io, socket) => {
  socket.on("ai:request", async data => {
    io.to(socket.id).emit("ai:response", {
      text: "AIの返答テスト：" + data.text
    });
  });
};
