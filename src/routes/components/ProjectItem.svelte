<script>
	let { name, url, tools, description, type } = $props();
</script>

<div class="flex w-full lg:w-10/12">
	<div
		class="flex basis-full flex-col border-[2px] border-dashed border-1-tertiary/60 bg-rose-pine-iris/[1%] px-2 text-1-text transition ease-in-out hover:border-rose-pine-iris hover:bg-rose-pine-iris/[6%]"
	>
		<div class="flex flex-col">
			<div class="flex flex-wrap content-stretch items-center justify-between">
				<div class="flex flex-row space-x-1">
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						class="text-base text-1-tertiary hover:underline group-hover:underline lg:text-lg"
						>{name}</a
					>
				</div>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					class="flex text-xs font-semibold text-[#5c596c] hover:underline group-hover:opacity-100"
				>
					{url}
				</a>
			</div>
			<p class="text-wrap pb-1 text-xs text-[#6a667c]">Stack/Skills: {tools}</p>
			<div
				class="flex h-fit bg-none align-middle text-xs font-semibold text-[#5c596c] group-hover:opacity-100"
			>
				[{type}]
			</div>
			<p class="text-wrap pb-1 text-sm opacity-100 lg:text-base">{description}</p>
		</div>
	</div>
</div>
