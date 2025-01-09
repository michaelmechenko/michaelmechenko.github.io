<script>
	import Header from './components/Header.svelte';
	import Ribbon from './components/Ribbon.svelte';
	import Sidebar from './components/Sidebar.svelte';

	const sections = {
		about: {
			title: 'about',
			header: '$ whoami'
		},
		projects: {
			title: 'portfolio',
			header: "projects i've worked on"
		},
		favorites: {
			title: 'recommendations',
			header: 'a selection of my favorite things'
		},
		contact: {
			title: 'contact',
			header: 'send a message'
		}
	};
</script>

<div class="flex justify-center">
	<main
		class="min-h-screen w-full border-x-2 border-dashed border-1-tertiary font-mono md:w-11/12 lg:w-2/3 xl:w-3/4 2xl:w-1/2"
	>
		<div class="relative overflow-x-hidden">
			<div class="py-2"></div>
			<Ribbon />
			<div class="pb-10"></div>
			<Header />
			<div class="pb-2"></div>
		</div>
		<Sidebar {sections} />
	</main>
</div>
