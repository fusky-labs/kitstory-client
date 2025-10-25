<script lang="ts">
  import { ChevronDownIcon } from "@lucide/svelte";
  import MenuItem from "./MenuItem.svelte";
  import type { SharedProps } from "./MenuItem.shared";

  interface Props extends SharedProps {
    label: string;
    isCollapsed?: true;
  }

  const {
    label,
    isCollapsed,
    icon,
    active,
    children,
    disabled,
    rightSlot: rootRightSlot,
  }: Props = $props();

  let isOpen = $state(isCollapsed ?? false);
</script>

<div id="menu-item-group-container" class="contents">
  <MenuItem {icon} {disabled} {active}>
    {label}
    {#snippet rightSlot()}
      {@render rootRightSlot?.()}
      <button class="p-2 cursor-pointer opacity-60 hover:opacity-100">
        <ChevronDownIcon size={19} />
      </button>
    {/snippet}
  </MenuItem>
  <div class="ml-5">
    {@render children?.()}
  </div>
</div>
