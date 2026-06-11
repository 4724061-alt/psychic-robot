const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(process.env.PORT || 3000);

});

// ▼ これが超重要（public フォルダを配信）
app.use(express.static("public"));

// ▼ Socket.IO の分割ファイルを読み込む
const systemSocket = require("./sockets/system");
const aiSocket = require("./sockets/ai");

// ▼ 接続時の処理
io.on("connection", socket => {
  // ここで userId をセットする（仮）
  socket.userId = socket.id; // 本番はログインIDに置き換える

  systemSocket(io, socket);
  aiSocket(io, socket);
});

// ▼ Railway 用ポート設定
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
