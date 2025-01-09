<script lang="ts">
	export const prerender = true;
	import '../app.css';
	let { children } = $props();
</script>

<div class="">
	{@render children()}
</div>

<style>
	:global(body) {
		background: #1f1d2e;
		scrollbar-width: none;
		scrollbar-color: #393552 rgba(0, 0, 0, 0);
	}
</style>
