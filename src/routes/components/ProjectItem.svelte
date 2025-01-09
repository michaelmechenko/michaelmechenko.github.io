<script>
	let { name, url, tools, description, type } = $props();
</script>

<a href={url} target="_blank" rel="noreferrer">
	<div
		class="border-[2px] border-dashed border-1-tertiary/60 bg-rose-pine-iris/[1%] px-2 text-1-text transition ease-in-out hover:border-rose-pine-iris hover:bg-rose-pine-iris/[6%]"
	>
		<div class="flex flex-col">
			<div class="flex flex-wrap content-stretch items-center justify-between">
				<div class="flex flex-row space-x-1">
					<h2 class="text-lg text-1-tertiary group-hover:underline">{name}</h2>
					<div
						class="bg-1-tertiary/00 flex h-fit items-center justify-center self-center px-2 align-middle text-xs font-semibold text-[#6a667c] group-hover:opacity-100"
					>
						[{type}]
					</div>
				</div>
				<p class="flex text-xs font-semibold text-[#5c596c] group-hover:opacity-100">
					{url}
				</p>
			</div>
			<p class="text-wrap pb-1 text-xs text-[#5c596c]">stack/skills: {tools}</p>
			<p class="text-wrap pb-1 text-sm opacity-100">{description}</p>
		</div>
	</div>
</a>
