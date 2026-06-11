const { updateUserAISetting, getUserAISetting } = require("../modules/user");
const { callAI } = require("../modules/ai");

module.exports = (io, socket) => {

  // AI設定の更新
  socket.on("ai:updateSetting", data => {
    const userId = socket.userId;
    updateUserAISetting(userId, data);
  });

  // AIにメッセージ送信
  socket.on("ai:message", async ({ text }) => {
    const userId = socket.userId;
    const setting = getUserAISetting(userId);

    if (!setting.aiEnabled) {
      io.to("user:" + userId).emit("ai:response", {
        text: "AIは現在OFFです。"
      });
      return;
    }

    const response = await callAI(setting.persona, text);

    io.to("user:" + userId).emit("ai:response", {
      text: response
    });
  });

};

