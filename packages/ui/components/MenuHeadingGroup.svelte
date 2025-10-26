<script lang="ts">
  import type { Snippet } from "svelte";
  import { Collapser } from "./templates";

  interface Props {
    children?: Snippet;
    rightSlot?: Snippet;
    label: string;
    // collapsible?: boolean;
    // isCollapsed?: true;
  }

  const { children, label, rightSlot }: Props = $props();
</script>

<Collapser id="menu-heading-group" role="group" class="space-y-1.5" state={true}>
  {#snippet heading()}
    <div>
      <h2 class="opacity-50 uppercase select-none px-2.5">{label}</h2>
      {@render rightSlot?.()}
    </div>
  {/snippet}
  <div class="contents">
    {@render children?.()}
  </div>
</Collapser>
