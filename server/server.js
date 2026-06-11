const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// --- Socket.IO 基礎 ---
io.on("connection", socket => {
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
});

server.listen(process.env.PORT || 3000);
