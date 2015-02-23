var conn;

if (!window.WebSocket) throw new Error('No support for websocket');

conn = new WebSocket('ws://10.10.10.10:3000/ws');
conn.onclose = function() {
  console.log('Connection closed.');
};

conn.onmessage = function(evt) {
  console.log(evt.data);
};

module.exports = conn;
