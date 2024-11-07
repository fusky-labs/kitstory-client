<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const _cvaBtn = cva("rounded-md", {
    variants: {
      variant: {
        primary: "bg-red-300 hover:bg-red-400",
        secondary: "bg-transparent hover:bg-red-300",
      },
      size: {
        smol: "class-smol",
        beeg: "p-2",
      },
    },
    compoundVariants: [{ variant: "primary", size: "beeg" }],
  });

  interface ButtonProps
    extends HTMLButtonAttributes,
      VariantProps<typeof _cvaBtn> {}

  let { variant = "primary", size = "beeg", children,  ...otherButtonStuff }: ButtonProps = $props();
</script>

<button
  {...otherButtonStuff}
  class={_cvaBtn({ variant, size, class: otherButtonStuff.class })}
>
  {@render children?.()}
</button>
