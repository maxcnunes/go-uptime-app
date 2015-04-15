export default class WS {
  constructor() {
    if (!window.WebSocket) throw new Error('No support for websocket');
    this.conn = new WebSocket('ws://go-uptime-api.local.dockito.org/ws');
  }

  /**
   * on connection is closed from websocket server
   */
  onClose (cb) {
    this.conn.onclose = (e) => {
      cb(e);
    };
  }

  /**
   * on message comes from websocket
   */
  onMessage (cb) {
    this.conn.onmessage = (e) => {
      cb(JSON.parse(e.data));
    };
  }
}
