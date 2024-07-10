<template>
  <div class="border-none md:pt-4">
    <div class="bg-gray-400/5 md:rounded-full border-b md:border dark:border-gray-800">

      <h1 class="font-bold text-black dark:text-white">
        Nuxt Todos + Deno KV
      </h1>
      <div style="float: right">

        <!-- <UColorModeButton /> -->
        <UButton to="https://github.com/atinux/nuxt-deno" target="_blank" icon="i-simple-icons-github" color="gray"
          variant="ghost" />
      </div>
    </div>
  </div>
  <UContainer>
    <!-- <UMain> -->
    <NuxtPage />
    <!-- </UMain> -->
  </UContainer>
  <div class="md:pb-4">
    <div class='bg-gray-400/5 md:rounded-full border-t md:border dark:border-gray-800'>

      Published under MIT License.
      <UButton to="https://x.com/Atinux" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" />
      <UButton to="https://github.com/atinux/nuxt-deno" target="_blank" icon="i-simple-icons-github" color="gray"
        variant="ghost" />
    </div>

  </div>
  <UNotifications />
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Todos + Deno KV',
  description:
    'A hosted demo showcasing Nuxt running on Deno Deploy using Deno KV + Watch feature.',
  ogSiteName: 'Nuxt Todos Deno KV',
  ogType: 'website',
  ogImage: 'https://yuyi-nuxt-deno-19.deno.dev/social-image.png',
  twitterImage: 'https://nuxt-guestbook.pages.dev/social-image.png',
  twitterCard: 'summary_large_image'
})
let ws: WebSocket | undefined = undefined
const log = console.log
const connect = async () => {
  const isSecure = location.protocol === "https:";
  const url = (isSecure ? "wss://" : "ws://") + location.host + "/api/hello2";
  if (ws) {
    log("ws", "Closing previous connection before reconnecting...");
    ws.close();
    // clear();
  }

  log("ws", "Connecting to", url, "...");
  ws = new WebSocket(url);

  ws.addEventListener("message", (event) => {
    const { user = "system", message = "" } = event.data.startsWith("{")
      ? JSON.parse(event.data)
      : { message: event.data };
    log(
      user,
      typeof message === "string" ? message : JSON.stringify(message),
    );
  });

  await new Promise((resolve) => ws!.addEventListener("open", resolve));
  log("ws", "Connected!");

  ws.addEventListener('message', (msg: any) => {
    console.log(msg.data);
  });
};
onMounted(async () => {
  connect();
})
</script>