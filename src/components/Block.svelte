<script lang="ts">
  import type { PlotBlockTypes } from "../types";
  import Button from "./Button.svelte";

  import { GripVerticalIcon, PlusIcon } from "lucide-svelte";

  interface BlockProps {
    lock?: boolean;
    type: Exclude<PlotBlockTypes, "section">;
  }

  let { lock, type = "dialogue" }: BlockProps = $props();
</script>

<section
  data-block-renderer=""
  class="relative rounded-md border border-red-300"
>
  <!-- Block actions -->
  <div
    id="block-actions"
    class="absolute inline-flex lg:flex-row flex-col-reverse w-fit top-2 -left-20"
  >
    <Button aria-label="Add new block">
      <PlusIcon size={17} />
    </Button>
    <Button aria-label="Grip me daddy">
      <GripVerticalIcon size={17} />
    </Button>
  </div>
  <!-- Main -->
  <div class="flex flex-col py-2.5 px-4">
    {#if type === "dialogue"}
      <span>Character dropdown</span>
      <textarea name="" id="" class="w-full rounded-md resize-y"></textarea>
    {:else if type === "narrator"}
      <span>Narrator</span>
    {:else if type === "setting"}
      <span>Setting</span>
    {/if}
  </div>
</section>
