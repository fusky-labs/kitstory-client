<script lang="ts">
  import type { SharedProps } from "./MenuItem.shared";

  interface Props extends SharedProps {
    as?: keyof HTMLElementTagNameMap;
  }

  const {
    children,
    rightSlot,
    as,
    icon: Icon,
    active = false,
    disabled = false,
  }: Props = $props();
</script>

<svelte:element
  this={as ?? "div"}
  id="menu-item"
  class="flex items-center group hover:bg-neutral-800/50 rounded-md"
>
  <a
    href="#"
    class="py-2 px-2.5 inline-flex items-center flex-1 gap-x-2 cursor-pointer"
  >
    <Icon size={22} class="opacity-60 group-hover:opacity-100" />
    {#if children}
      <span class="flex-1 select-none truncate">
        {@render children?.()}
      </span>
    {/if}
  </a>
  {#if rightSlot}
    <div id="__right-slot" class="contents">
      {@render rightSlot()}
    </div>
  {/if}
</svelte:element>
