<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    rightSlot?: Snippet;
    label: string;
    collapsible?: boolean;
    isCollapsed?: true;
  }

  const { children, label, collapsible = false, isCollapsed, rightSlot }: Props = $props();

  let collapseState = $state(isCollapsed ?? false);
</script>

<div
  data-ks-heading-group-container=""
  data-ks-expanded={collapsible ? collapseState : undefined}
  role="group"
  class="space-y-1.5"
>
  <div>
    <h2 class="opacity-50 uppercase select-none px-2.5">{label}</h2>
    {@render rightSlot?.()}
  </div>
  <div class="contents">
    {@render children?.()}
  </div>
</div>
