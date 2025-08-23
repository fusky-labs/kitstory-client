<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { cva } from "class-variance-authority";
  import type { Snippet } from "svelte";

  interface Props extends HTMLButtonAttributes {
    children: Snippet;

    leftSlot?: Snippet;
    rightSlot?: Snippet;

    icon?: Snippet;

    size?: "small" | "big";
    variant?: "primary" | "secondary";
  }

  const {
    class: className,
    icon,
    children,
    size,
    variant,
    leftSlot,
    rightSlot,
    ...others
  }: Props = $props();

  const button = cva(["rounded-md", className], {
    variants: {
      variant: {
        primary: "border border-red-400",
        secondary: "hover:bg-red-300",
      },
      size: {
        small: !icon ? "px-1.5 py-1" : "p-1.5",
        big: !icon ? "px-1.5 py-1" : "p-1",
      },
    },
  });
</script>

<button
  {...others}
  class={button({
    variant: variant || "primary",
    size: size || "small",
  })}
>
  {#if leftSlot}
    {@render leftSlot?.()}
  {/if}
  {@render children()}
  {#if rightSlot}
    {@render rightSlot?.()}
  {/if}
</button>
