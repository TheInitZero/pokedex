<script lang="ts">
	type Props = {
		name: string;
		className?: string;
	};

	const { name, className }: Props = $props();
</script>

<i class="{name} {className} icon"></i>

<style>
	.icon {
		color: var(--color, --color-text-muted);
		font-size: var(--size, 1rem);
	}
</style>
