<script lang="ts">
  import "./app.css";

  import { plotStore } from "./stores";
  import StoryPlotContainer from "./components/StoryPlotContainer.svelte";
  import StoryPlotControls from "./components/StoryPlotControls.svelte";

  $: bruh = $plotStore;
</script>

<div class="px-6 py-7">
  <StoryPlotContainer />
  <StoryPlotControls />
</div>
