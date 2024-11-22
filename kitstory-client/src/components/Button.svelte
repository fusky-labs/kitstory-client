<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { cva } from "class-variance-authority"

  interface Props extends HTMLButtonAttributes {
    class: string
    icon: boolean
    size: "small" | "big"
    variant: "primary" | "secondary"
  }

  let {
    class: className,
    icon,
    children,
    size,
    variant,
    ...others
  }: Partial<Props> = $props()

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
  })
</script>

<button
  {...others}
  class={button({
    variant: variant || "primary",
    size: size || "small",
  })}
>
  {@render children?.()}
</button>
