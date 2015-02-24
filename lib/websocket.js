var WS = module.exports = function () {
  if (!window.WebSocket) throw new Error('No support for websocket');
  this.conn = new WebSocket('ws://10.10.10.10:3000/ws');
};


WS.prototype.onClose = function(cb) {
  this.conn.onclose = function (e) {
    console.log('Connection closed.', e);
    cb(e);
  };
};


WS.prototype.onMessage = function(cb) {
  this.conn.onmessage = function (e) {
    console.log('New message:', e.data);
    cb(JSON.parse(e.data));
  };
};
