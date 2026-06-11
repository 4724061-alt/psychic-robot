const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// ▼ public フォルダを配信（超重要）
app.use(express.static(path.join(__dirname, "../public")));

// ▼ Socket.IO の分割ファイルを読み込む
const systemSocket = require("./sockets/system");
const aiSocket = require("./sockets/ai");

// ▼ 接続時の処理
io.on("connection", socket => {
  console.log("接続:", socket.id);

  // 仮の userId（本番はログインIDに置き換える）
  socket.userId = socket.id;

  systemSocket(io, socket);
  aiSocket(io, socket);
});

// ▼ Railway 用ポート設定
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
