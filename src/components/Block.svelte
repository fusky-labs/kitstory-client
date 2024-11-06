<script lang="ts">
  interface BlockProps {
    lock?: boolean;
    type: "narrator" | "dialogue" | "setting" | "section";
  }

  let { lock, type }: BlockProps = $props();
</script>
