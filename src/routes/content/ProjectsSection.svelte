<script>
	import ProjectItem from '../components/ProjectItem.svelte';
	import Separator from '../components/Separator.svelte';

	let currentFilter = 'all';
	// @ts-ignore
	function setFilter(filter) {
		currentFilter = filter;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->

<div class="flex flex-col">
	here is a small selection of projects i've worked on. most are available to view as repositories
	on github; others that are not solely software-based will likely be missing documentation, but
	will be updated on this page in due time. if you'd like more information on these projects, feel
	free to ask!
	<div class="px-4 pt-4">
		<Separator />
	</div>
	<div class="flex w-full shrink-0 basis-full flex-col items-center justify-center gap-y-4 pt-4">
		<div class="flex w-full lg:w-10/12">
			<div
				class="3xl:mx-16 3xl:mx-16 3xl:text-[1rem] mx-2 flex basis-full flex-row justify-center space-x-4 border-[2px] border-solid border-1-tertiary/60 bg-rose-pine-iris/[6%] py-2 text-[0.80rem] text-1-text transition ease-in-out hover:border-1-tertiary/80 md:mx-16 md:space-x-6 lg:mx-14 lg:space-x-6 lg:text-[1rem] xl:mx-16 xl:text-[1rem] 2xl:text-[1-rem]"
			>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'all'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('all')}
				>
					all
				</div>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'personal project'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('personal project')}
				>
					personal projects
				</div>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'class project'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('class project')}
				>
					class projects
				</div>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'work assignment'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('work assignment')}
				>
					work assignments
				</div>
			</div>
		</div>
		{#if currentFilter === 'all' || currentFilter === 'personal project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/michaelmechenko.github.io'}
				name="portfolio site"
				tools="svelte, js/html/css"
				type="personal project"
				description="the webpage you are currently viewing"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'personal project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/dotfiles'}
				name="my dotfiles"
				tools="lua, shell scripting"
				description="the tools of the trade"
				type="personal project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/react-spreadsheet'}
				name="react spreadsheet"
				tools="react, nodejs, jh/html/css"
				description="a spreadsheet application written in React.js from the ground up"
				type="class project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'work assignment'}
			<ProjectItem
				url={''}
				name="salesforce-enabled automated gong"
				tools="c++, arduino, circuit design, 3d modeling & printing, salesforce"
				description="created a Salesforce-driven automated gong for the Tulip office. this included modeling and printing a mount for the gong, creating and programming a circuit that drives a motor using Arduino, attaching a mallet, and creating an event listener for the Salesforce api which would enable the motor any time a sale in the office was made"
				type="work assignment"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={''}
				name="risc-v single-cycle processor"
				tools="systemverilog, asm, vivado, fpga"
				description="constructed a single-cycle RISC-V like processor using a Xilinx FPGA. logic circuits were programmed and defined in SystemVerilog to create components like register files, data memory, instruction memory, and branching logic, ultimately being able to run machine code. specifically, an assembly program that multiplies two 8-bit signed numbers in two’s complement system"
				type="class project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/shell-emulator'}
				name="shell emulator"
				tools="c"
				description="created a shell in c, utilyzing syscalls directly to the system and features pipes, redirection, and sequencing"
				type="class project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/mem-allocator'}
				name="memory allocator"
				tools="c"
				description="an implementation of malloc, calloc, and free in c, featuring a threaded implementation and the coalescing of free blocks"
				type="class project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/image-processor'}
				name="image processor"
				tools="java, javafx"
				description="a gui application that can manipulate images and cast various filters onto them, with the ability to read and write from the user's system"
				type="class project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={''}
				name="nomad screen"
				tools="electron, arduino/esp32, c, 3d modeling & printing, circuit design"
				description="created a fully portable, rechargeable projector that can store, transfer, and play back media, sporting a battery life of 8+ hours"
				type="senior capstone project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'work assignment'}
			<ProjectItem
				url={''}
				name="javascript widgets"
				tools="js/html/css"
				description="while working at Tulip, created numerous drag-and-drop widgets such as sliders, sensor readers, and graphing software to simplify and minimize user input when designing industrial applications"
				type="work assignment"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'class project'}
			<ProjectItem
				url={''}
				name="ecg signal processing"
				tools="circuit design, matlab"
				description="read and processed an ECG signal by constructing a circuit using an instrumentation amplifier and various low/high pass filters to denoise and amplify the signal. this signal was then digitally sampled and processed to remove interference, with the ultimate goal of automatically detecting the heart rate of the ECG reading."
				type="class project"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'work assignment'}
			<ProjectItem
				url={''}
				name="demo station for banner equipment"
				tools="node-red, modbus, banner electronics and sensors, 3d modeling & printing"
				description="at Tulip, created a display station for Banner's various electronics and sensors to showcase the capabilities of Tulip's hardware and software"
				type="work assignment"
			/>
		{/if}
		{#if currentFilter === 'all' || currentFilter === 'personal project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/terminal-site'}
				name="terminal emulator"
				tools="react, js/html/css"
				description="a simple terminal-based website that responds to various input commands"
				type="personal project"
			/>
		{/if}
	</div>
</div>
<!-- <ProjectItem -->
<!-- 	url={'https://github.com/michaelmechenko'} -->
<!-- 	name="" -->
<!-- 	tools="" -->
<!-- 	description="" -->
<!-- 	type="" -->
<!-- /> -->
