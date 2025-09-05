<script setup lang="ts">
import { onUnmounted, useTemplateRef } from "vue";

const iframe = useTemplateRef("iframe");

const broadcastChannel = new BroadcastChannel("test_channel");

broadcastChannel.addEventListener("message", (event) => {
	console.log(`message received:`, event);

	if (iframe.value) {
		iframe.value.contentWindow?.postMessage({
			sender: "application",
			data: event.data,
		});
	}
});

onUnmounted(() => {
	broadcastChannel.close();
});
</script>

<template>
	<div>
		<div>Index</div>
		<iframe
			ref="iframe"
			src="/embedded-site.html"
			frameborder="0"
			style="height: 30vh; border: 1px solid gray"
		></iframe>
	</div>
</template>
