module.exports = (io, socket) => {
  console.log("接続:", socket.id);

  socket.on("joinUser", userId => {
    socket.join("user:" + userId);
  });

  socket.on("joinCommunity", communityId => {
    socket.join("community:" + communityId);
  });

  socket.on("disconnect", () => {
    console.log("切断:", socket.id);
  });
};

