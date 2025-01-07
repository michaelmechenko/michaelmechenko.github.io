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
		class="max-h-screen min-h-screen overflow-scroll border-x-2 border-dashed border-1-tertiary font-mono sm:w-11/12 md:w-2/3 lg:w-1/2"
	>
		<div class="relative overflow-hidden">
			<div class="py-2"></div>
			<Ribbon />
			<div class="pb-10"></div>
			<Header />
			<div class="pb-2"></div>
		</div>
		<Sidebar {sections} />
	</main>
</div>
