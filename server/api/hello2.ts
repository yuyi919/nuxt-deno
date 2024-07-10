// import "node-fetch-native/polyfill"
import { Wss } from "@/server/utils/wss.mjs"

export default defineWebSocketHandler(new Wss().hooks);
