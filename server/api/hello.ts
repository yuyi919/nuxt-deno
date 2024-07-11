// import "node-fetch-native/polyfill"
// import { Wss } from "@/server/utils/wss.mjs";
// import { WebSocket as ws } from "ws";
// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);
// export default defineWebSocketHandler({
//   open() {
//     const StringDecoder = require("string_decoder").StringDecoder;
//   },

import { QQ } from "#imports";

// });
const config = {
  timeout: undefined,
  headers: {},
};
const getGateway = async () => (await $get("/gateway")) as { url: string };
// curl --location 'https://bots.qq.com/app/getAppAccessToken' --header 'Content-Type: application/json' --data '{"appId": "APPID","clientSecret": "CLIENTSECRET"}'

class WsClient {
  _sessionId = "";
  _s: number | null = null;
  _ping!: NodeJS.Timeout;
  bot = {
    logger: console,
    config: $config(),
  };
  constructor(public socket: WebSocket) {
    socket.addEventListener("error", (error) => {
      console.error(error);
    });
    socket.addEventListener("open", () => {
      console.log("ws open");
    });
    socket.addEventListener("close", () => {
      console.log("ws close");
    });
    socket.addEventListener("message", ({ data }) => {
      const parsed: Payload = JSON.parse(data.toString());
      console.log("message", parsed);
    });
  }

  heartbeat(socket: WebSocket) {
    socket.send(
      JSON.stringify({
        op: Opcode.HEARTBEAT,
        s: this._s,
      })
    );
  }

  accept(socket: WebSocket) {
    socket.addEventListener("message", async ({ data }) => {
      const parsed: Payload = JSON.parse(data.toString());
      // this.bot.logger.debug("websocket receives %o", parsed);
      if (parsed.op === Opcode.HELLO) {
        const access = await getAppAccessToken();
        if (this._sessionId) {
          socket.send(
            JSON.stringify({
              op: Opcode.RESUME,
              d: {
                token: `QQBot ${access.access_token}`,
                // token: `Bot ${this.bot.config.id}.${this.bot.config.token}`,
                session_id: this._sessionId,
                seq: this._s,
              },
            })
          );
        } else {
          socket.send(
            JSON.stringify({
              op: Opcode.IDENTIFY,
              d: {
                // token: `Bot ${this.bot.config.id}.${this.bot.config.token}`,
                token: `QQBot ${access.access_token}`,
                intents: this.bot.config.intents,
                shard: [0, 1],
              },
            })
          );
        }
        this._ping = setInterval(
          () => this.heartbeat(socket),
          parsed.d.heartbeat_interval
        );
      } else if (parsed.op === Opcode.INVALID_SESSION) {
        this._sessionId = "";
        this._s = null;
        // this.bot.logger.warn("offline: invalid session");
        socket.close();
      } else if (parsed.op === Opcode.RECONNECT) {
        // this.bot.logger.warn("offline: server request reconnect");
        socket.close();
      } else if (parsed.op === Opcode.DISPATCH) {
        //   this.bot.dispatch(
        //     this.bot.session({
        //       type: "internal",
        //       _type: "qq/" + parsed.t.toLowerCase().replace(/_/g, "-"),
        //       _data: parsed.d,
        //     })
        //   );
        //   this._s = parsed.s;
        // if (parsed.t === "READY") {
        //   this._sessionId = parsed.d.session_id;
        //   this.bot.user = decodeUser(parsed.d.user);
        //   this.bot.guildBot.user = this.bot.user;
        //   await this.bot.initialize();
        //   return this.bot.online();
        // }
        // if (parsed.t === "RESUMED") {
        //   return this.bot.online();
        // }
        // const session = await adaptSession(this.bot, parsed);
        // if (session) this.bot.dispatch(session);
        // this.bot.logger.debug(session)
        if (parsed.t === "MESSAGE_CREATE") {
          const payload: QQ.Message.ChannelRequest = {
            content: JSON.stringify(parsed),
            // message_reference: {
            //   message_id: parsed.d?.id!,
            // },
            // event_id: "id" in parsed ? parsed.id as string : undefined,
            msg_id: parsed.d?.id,
          };
          console.log(await $get(`/guilds/${parsed.d!.guild_id!}`));
          console.log(await $get(`/channels/${parsed.d!.channel_id!}`));
          console.log("post", payload);
          $post(`/channels/${parsed.d!.channel_id!}/messages`, payload).then(
            console.log
          );
        }
      } else {
        $get("/users/@me").then(console.log);
      }
    });

    socket.addEventListener("close", (e) => {
      this.bot.logger.debug(
        "websocket closed, code %o, reason: %s",
        e.code,
        e.reason
      );
      clearInterval(this._ping);
    });
  }

  static async link() {
    const { url } = await getGateway();

    const cl =
      typeof WebSocket !== "undefined"
        ? new WebSocket(url)
        : await (async () => {
            const { StandardWebSocketClient } = await import(
              "https://deno.land/x/websocket@v0.1.4/mod.ts"
            );
            return new StandardWebSocketClient(url);
          })();
    const client = new WsClient(cl);
    client.accept(client.socket);
    return client;
  }
}
let client = WsClient.link();
export default defineWebSocketHandler({
  message() {},
  close(peer, details) {
    console.log("peer close", peer);
  },
  async open(peer) {
    const host = await (client ??= WsClient.link());
    console.log("peer open", peer);
    host.socket.addEventListener("message", ({ data }) => {
      const parsed: Payload = JSON.parse(data.toString());
      console.log(peer, parsed);
      peer.send({ type: "message", data });
    });
    host.socket.addEventListener("error", (error) => {
      peer.send({ type: "error", error });
    });
  },
});
