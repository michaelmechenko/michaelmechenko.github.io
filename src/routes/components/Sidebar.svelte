<script lang="ts">
	let { sections } = $props();
	let selectedSection = $state('readme');
</script>

<div class="flex flex-col text-1-text">
	<nav
		class="sticky top-0 flex flex-row justify-center border-y border-dashed border-1-tertiary bg-1-tertiary-nav py-2"
	>
		<ul class="flex flex-row space-x-12">
			{#each Object.entries(sections) as [id, section]}
				<li>
					<button
						class="text-m transition ease-in-out hover:text-1-tertiary"
						class:underline={selectedSection === id}
						class:text-1-tertiary={selectedSection === id}
						onclick={() => (selectedSection = id)}
					>
						{section.title}
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<main class="px-4 py-2">
		<section>
			<h1 class="pb-2 text-xl italic text-1-tertiary">
				{sections[selectedSection].title}
			</h1>
			<p class="">{sections[selectedSection].content}</p>
		</section>
	</main>
</div>
