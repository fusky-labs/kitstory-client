<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import {
    MessageSquareIcon as CommentIcon,
    PlusIcon,
    GripVerticalIcon,
    LockIcon,
  } from "lucide-svelte"

  import Button from "./Button.svelte"
  import type { BlockIndicators } from "./blocks.types"

  let {
    comments,
    locked,
    children,
  }: Partial<BlockIndicators & HTMLAttributes<HTMLElement>> = $props()
</script>

<section class="relative" id="plot-block-wrapper">
  <div class="absolute top-0 left-0 -translate-x-full pr-3">
    <div id="block-detail-indicator" class="flex flex-col items-end gap-y-0.5">
      <span id="block-actions" class="justify-end flex-row !gap-x-1 mb-1.5">
        <Button icon>
          <PlusIcon size={21} />
        </Button>
        <Button icon class="cursor-grab">
          <GripVerticalIcon size={21} />
        </Button>
      </span>

      {#if comments}
        <Button variant="secondary" class="inline-flex items-center gap-x-1">
          <CommentIcon size={17} />
          <span id="count">3</span>
        </Button>
      {/if}

      {#if locked}
        <Button variant="secondary" class="inline-flex items-center gap-x-1">
          <LockIcon size={17} />
          <span>Locked</span>
        </Button>
      {/if}
    </div>
  </div>

  <div id="main-block-content" class="flex-1">
    <div class="p-3 rounded-md border border-red-400">
      {@render children?.()}
    </div>
  </div>
</section>
