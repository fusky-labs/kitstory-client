<script lang="ts">
  import BlockTemplate from "./BlockTemplate.svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import type { BlockIndicators } from "./blocks.types"

  const { locked }: Partial<BlockIndicators & HTMLAttributes<HTMLElement>> =
    $props()
</script>

<BlockTemplate>
  <textarea name="" id="" autocapitalize="off" spellcheck={false}></textarea>
</BlockTemplate>
