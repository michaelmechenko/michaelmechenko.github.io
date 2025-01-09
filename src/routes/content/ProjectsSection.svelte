<script>
	import ProjectItem from '../components/ProjectItem.svelte';
</script>

<div>
	here is a small selection of projects i've worked on. most are available to view as repos on
	github; others that are not solely software-based will likely be missing documentation, but will
	be updated in due time. if you'd like more information on these projects, feel free to ask!
	<div class="grid grid-cols-1 gap-y-3 pt-2">
		<ProjectItem
			url={'https://github.com/michaelmechenko'}
			name="portfolio site"
			tools="svelte, js/html/css"
			type="personal project"
			description="the webpage you are currently viewing"
		/>
		<ProjectItem
			url={'https://github.com/michaelmechenko/dotfiles'}
			name="my dotfiles"
			tools="lua, shell scripting"
			description="the tools of the trade"
			type="personal project"
		/>
		<ProjectItem
			url={'https://github.com/michaelmechenko/react-spreadsheet'}
			name="react spreadsheet"
			tools="react, nodejs, jh/html/css"
			description="a spreadsheet application written in react from the ground up"
			type="class project"
		/>
		<ProjectItem
			url={'https://github.com/michaelmechenko/shell-emulator'}
			name="shell emulator"
			tools="c"
			description="created my own shell in c, utilyzing syscalls directly to the system and features pipes, redirection, and sequencing"
			type="class project"
		/>
		<ProjectItem
			url={'https://github.com/michaelmechenko/mem-allocator'}
			name="memory allocator"
			tools="c"
			description="my own implementation of malloc, calloc, and free in c, featuring a threaded implementation and the coalescing of free blocks"
			type="class project"
		/>
		<ProjectItem
			url={'https://github.com/michaelmechenko/image-processor'}
			name="image processor"
			tools="java, javafx"
			description="a gui application that can manipulate images and cast various filters onto them, with the ability to read and write ffrom the user's system"
			type="class project"
		/>
		<ProjectItem
			url={''}
			name="nomad screen"
			tools="electron, arduino/esp32, c, 3d modeling & printing, circuit design"
			description="created a fully portable, rechargeable projector that can store, transfer, and play back media, sporting a battery life of 8+ hours"
			type="senior capstone project"
		/>
		<ProjectItem
			url={''}
			name="javascript widgets"
			tools="js/html/css"
			description="created numerous drag-and-drop widgets such as sliders, sensor readers, and graphing software to simplify and minimize user input when designing industrial applications"
			type="work assignment"
		/>
		<ProjectItem
			url={''}
			name="demo station for Banner equipment"
			tools="node-red, modbus, banner electronics and sensors, 3d modeling & printing"
			description="while working at Tulip, created a display station for Banner's various electronics and sensors to showcase the capabilities of Tulip's hardware and software"
			type="work assignment"
		/>
		<ProjectItem
			url={'https://github.com/michaelmechenko/terminal-site'}
			name="terminal emulator"
			tools="react, js/html/css"
			description="a simple terminal-based website that responds to various input commands"
			type="personal project"
		/>
	</div>
</div>
<!-- <ProjectItem -->
<!-- 	url={'https://github.com/michaelmechenko'} -->
<!-- 	name="" -->
<!-- 	tools="" -->
<!-- 	description="" -->
<!-- 	type="" -->
<!-- /> -->
