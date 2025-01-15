<script>
	import AboutSection from '../content/AboutSection.svelte';
	import ContactSection from '../content/ContactSection.svelte';
	import FavoritesSection from '../content/FavoritesSection.svelte';
	import ProjectsSection from '../content/ProjectsSection.svelte';
	let { sections } = $props();
	let selectedSection = $state('about');
</script>

<div class="flex flex-col text-1-text">
	<nav
		class="sticky top-0 flex flex-row justify-center border-y border-dashed border-1-tertiary bg-1-tertiary-nav py-2"
	>
		<ul class="flex flex-row space-x-4 md:space-x-12 lg:space-x-16 lg:text-lg">
			{#each Object.entries(sections) as [id, section]}
				<li>
					<button
						class="transition ease-in-out hover:text-1-tertiary"
						class:underline={selectedSection === id}
						class:text-1-tertiary-lighter={selectedSection === id}
						onclick={() => (selectedSection = id)}
					>
						{section.title}
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<main class="px-2 py-2 md:px-4 lg:px-4">
		<section>
			<h1 class="pb-2 text-2xl italic text-1-tertiary-lighter">
				{sections[selectedSection].header}
			</h1>
			{#if selectedSection === 'about'}
				<AboutSection />
			{:else if selectedSection === 'projects'}
				<ProjectsSection />
			{:else if selectedSection === 'favorites'}
				<FavoritesSection />
			{:else if selectedSection === 'contact'}
				<ContactSection />
			{/if}
		</section>
	</main>
</div>
