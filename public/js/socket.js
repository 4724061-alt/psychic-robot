const socket = io();

// 自分のユーザールームに入る
function joinUserRoom(userId) {
  socket.emit("joinUser", userId);
}

// コミュニティに入る
function joinCommunityRoom(communityId) {
  socket.emit("joinCommunity", communityId);
}

