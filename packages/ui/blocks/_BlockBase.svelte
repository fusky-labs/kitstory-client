<script lang="ts">
  import type { BlockTypes } from "$lib/types";
  import { GripVerticalIcon } from "@lucide/svelte";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    class?: string;

    /** Instead of this component generating a UUID, it's best for components
     * to independently generate a UUID on their own, so that there's no server mismatch
     */
    uuid?: unknown;
    /** @internal */
    _blockType: BlockTypes;
    blockIndex?: number;

    [x: string]: unknown;
  }

  const {
    children,
    class: className,
    _blockType,
    blockIndex,
    uuid,
    ...others
  }: Props = $props();
</script>

<!-- This is a base block component responsible for handling its position and the drag and drop logic -->
<section
  class="group relative border rounded-md px-2.5 py-3.5"
  {...others}
  data-block-type={_blockType}
  data-locked="false"
  data-block-index={blockIndex}
  data-block-uuid={uuid}
>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-0 -left-8 pr-4 inset-y-0 mt-3"
  >
    <!-- Select contens -->
    <!-- <button class="cursor-grab">
      <GripVerticalIcon size={20} />
    </button> -->
    <button class="cursor-grab">
      <GripVerticalIcon size={20} />
    </button>
  </div>
  <div class={className}>
    {@render children()}
  </div>
</section>
