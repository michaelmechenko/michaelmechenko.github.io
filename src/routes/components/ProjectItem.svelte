<script>
	let { name, url, tools, description } = $props();
</script>

<a href="{url}" target="_blank" rel="noreferrer">
	<div
		class="border-[2px] border-dashed border-1-tertiary/60 bg-rose-pine-iris/[1%] transition ease-in-out px-2 text-1-text hover:border-rose-pine-iris hover:bg-rose-pine-iris/[6%]"
	>
		<div class="flex flex-col">
			<div class="flex content-stretch items-center justify-between">
				<h2 class="text-lg text-1-tertiary group-hover:underline">{name}</h2>
				<!-- <div -->
				<!-- 	class="bg-1-tertiary/60 px-2 text-xs font-semibold text-1-text opacity-75 group-hover:opacity-100" -->
				<!-- > -->
				<!-- 	work in progress -->
				<!-- </div> -->
				<p class="flex text-xs font-semibold opacity-40 group-hover:opacity-100">
          {url}
				</p>
			</div>
			<p class="text-wrap pb-1 text-xs opacity-40">stack/skills: {tools}</p>
			<p class="text-wrap pb-1 text-sm opacity-95">{description}</p>
		</div>
	</div>
</a>
