<script lang="ts">
  import "../styles.css";
  import "@fontsource/azeret-mono";

  import { message } from "@tauri-apps/plugin-dialog";

  import { BellIcon } from "@lucide/svelte";
  import WindowContainer from "$lib/components/WindowContainer.svelte";

  const { children } = $props();

  const LOCAL_MODE_LABEL =
    "Kitstory is on local mode; any changes won't be synced automatically, workspaces are saved from your computer, but you may choose to sync them manually if you wish.";
</script>

<WindowContainer>
  {#snippet breadcrumbs()}
    <nav id="breadcrumbs">
      <button>Home</button>
    </nav>
  {/snippet}
  {#snippet titlebarActions()}
    <button
      class="mx-2 rounded-md text-sm px-2 py-1 bg-neutral-600 uppercase hover:bg-neutral-500/40"
      onclick={() =>
        message(LOCAL_MODE_LABEL, { title: "Kitstory: Local Mode Enabled" })}
      >Local Only</button
    >
    <button
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-neutral-500/40"
    >
      <BellIcon size={19} />
    </button>
    <button
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-neutral-500/40 group"
      aria-label="Avatar"
    >
      <div
        class="bg-blue-400/20 size-6 rounded-full border-1 border-transparent group-hover:border-amber-50"
      ></div>
    </button>
  {/snippet}
  {@render children()}
</WindowContainer>
