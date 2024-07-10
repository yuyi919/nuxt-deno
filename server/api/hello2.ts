// import "node-fetch-native/polyfill"
import { Wss } from "@/server/utils/wss.mjs"
// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);
// export default defineWebSocketHandler({
//   open() {
//     const StringDecoder = require("string_decoder").StringDecoder;
//   },
// });
export default defineWebSocketHandler(new Wss().hooks);
