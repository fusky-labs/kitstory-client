<script lang="ts">
  import type { PlotBlockTypes } from "../types";

  interface BlockProps {
    lock?: boolean;
    type: PlotBlockTypes;
  }

  let { lock, type }: BlockProps = $props();
</script>
