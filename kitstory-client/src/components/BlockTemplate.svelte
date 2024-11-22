<script lang="ts">
  interface Props {
    comments: unknown
    children: Function
    locked: boolean
  }

  let { comments, children }: Partial<Props> = $props()
</script>

<div>
  <div id="sidebar">
    <span id="actions"></span>
  </div>
  <div id="block-contents">
    {@render children?.()}
  </div>
</div>
