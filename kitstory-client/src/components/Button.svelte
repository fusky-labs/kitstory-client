<script lang="ts">
  interface Props {
    children?: Function
  }

  let { children }: Props = $props()
</script>

<button>{@render children?.()}</button>
