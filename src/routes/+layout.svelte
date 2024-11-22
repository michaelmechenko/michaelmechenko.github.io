<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-rose-pine-base font-mono text-rose-pine-text">
	<main>
		{@render children()}
	</main>

	<!-- </About> -->
	<!-- </Navbar> (Scales after about mini about section) -->
	<!-- </Projects> -->
	<!-- </Education-Work> -->
	<!-- </Contact> -->
	<!-- </Footer> -->
</div>

<style>
</style>
