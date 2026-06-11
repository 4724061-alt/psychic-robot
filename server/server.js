const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// --- Socket.IO 基礎 ---
const systemSocket = require("./sockets/system");

io.on("connection", socket => {
  systemSocket(io, socket);
});

server.listen(process.env.PORT || 3000);
