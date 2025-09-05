<script setup lang="ts">
const broadcastChannel = new BroadcastChannel("test_channel");

function postMessage() {
	broadcastChannel.postMessage("Test message from about page");
}
</script>

<template>
	<div>
		<div>About Page</div>
		<div>
			<button @click="postMessage()">Post message</button>
		</div>
	</div>
</template>
