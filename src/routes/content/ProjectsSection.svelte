<script>
import ProjectItem from "../components/ProjectItem.svelte";
import Separator from "../components/Separator.svelte";

let currentFilter = "All";
// @ts-ignore
function setFilter(filter) {
	currentFilter = filter;
}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->

<div class="flex flex-col">
	Here is a selection of projects I've worked on. Most are available to view as repositories on
	GitHub; others that are not solely software-based may have incomplete documentation, but will be
	updated in due time. If you'd like to learn more about these projects, feel free to reach out!
	<div class="px-4 pt-4">
		<Separator />
	</div>
	<div class="flex w-full shrink-0 basis-full flex-col items-center justify-center gap-y-4 pt-4">
		<div class="flex w-full lg:w-10/12">
			<div
				class="3xl:mx-16 3xl:mx-16 3xl:text-[1rem] mx-4 flex basis-full flex-row items-center justify-center space-x-4 overflow-auto border-[2px] border-solid border-1-tertiary/60 bg-rose-pine-iris/[6%] px-4 py-2 text-center text-[0.80rem] text-1-text transition ease-in-out hover:border-1-tertiary/80 lg:mx-14 lg:space-x-6 lg:text-[0.85rem] xl:mx-16 xl:text-[0.85rem] 2xl:text-[0.85rem]"
			>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'All'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('All')}
				>
					all
				</div>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'Personal Project'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('Personal Project')}
				>
					personal projects
				</div>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'Class Project'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('Class Project')}
				>
					class projects
				</div>
				<div
					role="button"
					tabindex="0"
					class={currentFilter === 'Work Assignment'
						? 'text-1-tertiary-lighter underline transition ease-in-out'
						: 'text-1-text transition ease-in-out hover:text-1-tertiary-lighter'}
					on:click={() => setFilter('Work Assignment')}
				>
					work assignments
				</div>
			</div>
		</div>
		{#if currentFilter === 'All' || currentFilter === 'Personal Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/michaelmechenko.github.io'}
				name="Portfolio Site"
				tools="Svelte, JS/HTML/CSS"
				type="Personal Project"
				description="You're currently here!"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Personal Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/dotfiles'}
				name=".dotfiles"
				tools="Lua, Shell Scripting"
				description="The tools of the trade."
				type="Personal Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/opengl-sgraph-renderer'}
				name="OpenGL Scene Graph Renderer and Ray Tracer"
				tools="C, C++, OpenGL, GLFW"
				description="An OpenGL scene renderer and ray tracer supporting hierarchical node structures, dynamic transformations, and advanced material/light interactions in C++. Features a custom command language for scene specification, enabling both interactive real-time visualization and ray-traced image generation using modern shader techniques."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/react-spreadsheet'}
				name="React Spreadsheet"
				tools="React, Node.js, JavaScript/HTML/CSS"
				description="A spreadsheet application written in React.js from the ground up."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Work Assignment'}
			<ProjectItem
				url={''}
				name="Salesforce-Enabled Automated Gong"
				tools="C++, Arduino, Circuit Design, 3D Modeling & Printing, Salesforce"
				description="Created a Salesforce-driven automated gong for the Tulip office. This included modeling and printing a mount for the gong, creating and programming a circuit that drives a motor using Arduino, attaching a mallet, and creating an event listener for the Salesforce API which would enable the motor any time a sale in the office was made."
				type="Work Assignment"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={''}
				name="RISC-V Single-Cycle Processor"
				tools="SystemVerilog, ASM, Vivado"
				description="Constructed a single-cycle RISC-V like processor using a Xilinx FPGA. Logic circuits were programmed and defined in SystemVerilog to create components like register files, data memory, instruction memory, and branching logic, ultimately being able to run machine code. Specifically, an assembly program that multiplies two 8-bit signed numbers in two’s complement system."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/shell-emulator'}
				name="Shell Emulator"
				tools="C"
				description="Created a shell in C, utilyzing syscalls directly to the system and featuring pipes, redirection, and sequencing."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/mem-allocator'}
				name="Custom Memory Allocator"
				tools="C"
				description="An implementation of malloc, calloc, and free in C, featuring single and multithreaded implementations and the coalescing of free blocks."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/image-processor'}
				name="Image Processor"
				tools="Java, JavaFX"
				description="A GUI application that can manipulate images and cast various filters onto them, with the ability to read and write from the user's system."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={''}
				name="Nomad Screen"
				tools="Electron, Arduino/ESP32, C, 3D Modeling & Printing, Circuit/Battery Design"
				description="Created a fully portable, rechargeable projector that can store, transfer, and play back media, sporting a battery life of 8+ hours."
				type="Senior Capstone Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Work Assignment'}
			<ProjectItem
				url={''}
				name="JavaScript Widgets"
				tools="JavaScript/HTML/CSS"
				description="While working at Tulip, created numerous drag-and-drop widgets such as sliders, sensor readers, and graphing software to simplify and minimize user input when designing industrial applications."
				type="Work Assignment"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Class Project'}
			<ProjectItem
				url={''}
				name="ECG Signal Processing"
				tools="Circuit Design, MATLAB"
				description="Read and processed an ECG signal by constructing a circuit using an instrumentation amplifier and various low/high pass filters to denoise and amplify the signal. This signal was then digitally sampled and processed to remove interference, with the ultimate goal of automatically detecting the heart rate of the ECG reading."
				type="Class Project"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Work Assignment'}
			<ProjectItem
				url={''}
				name="Demo Station for Banner Equipment"
				tools="Node-RED, Modbus, Banner Electronics and Sensors, 3D Modeling & Printing"
				description="At Tulip, created a display station for Banner's various electronics and sensors to showcase the capabilities of Tulip's hardware and software."
				type="Work Assignment"
			/>
		{/if}
		{#if currentFilter === 'All' || currentFilter === 'Personal Project'}
			<ProjectItem
				url={'https://github.com/michaelmechenko/terminal-site'}
				name="Terminal Emulator"
				tools="React.js, JavaScript/HTML/CSS"
				description="A simple terminal-based website that responds to various input commands."
				type="Personal Project"
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
