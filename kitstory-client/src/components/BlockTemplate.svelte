<script lang="ts">
  interface Props {
    comments?: unknown
    children?: Function
  }

  let { comments, children }: Props = $props()
</script>

<div>
  <div id="sidebar">
    <span id="actions"></span>
  </div>
  <div id="block-contents">
    {@render children?.()}
  </div>
</div>
