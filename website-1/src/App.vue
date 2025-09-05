<script setup lang="ts"></script>

<template>
	<div>
		<header style="display: flex; gap: 1rem; margin-bottom: 2rem">
			<RouterLink to="/">Index</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</header>
		<main>
			<RouterView />
		</main>
	</div>
</template>
