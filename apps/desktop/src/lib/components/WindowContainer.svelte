<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { getCurrentWindow } from "@tauri-apps/api/window";

  import {
    SquareIcon as MaxIcon,
    MinusIcon as MiniIcon,
    CopyIcon as RestoreIcon,
    XIcon as CloseIcon,
    MenuIcon,
  } from "@lucide/svelte";

  interface Props {
    children: Snippet;
    titlebarActions: Snippet;
    breadcrumbs: Snippet;
  }

  const { children, titlebarActions, breadcrumbs }: Props = $props();

  let closeButton: HTMLButtonElement;
  let restoreButton: HTMLButtonElement;
  let maximizeButton: HTMLButtonElement;
  let minmizeButton: HTMLButtonElement;

  onMount(() => {
    const w = getCurrentWindow();

    w.onResized((e) => {
      console.log("resized", e);
    });

    closeButton.addEventListener("click", () => {
      // TODO add a confirmation system modal if there are unsaved changes
      w.close();
    });
    restoreButton.addEventListener("click", () => {
      w.unmaximize();
    });
    maximizeButton.addEventListener("click", () => {
      w.maximize();
    });
    minmizeButton.addEventListener("click", () => {
      w.minimize();
    });
  });
</script>

<div id="window-wrapper" class="grid grid-rows-[auto_1fr] h-[100dvh]">
  <div id="title-bar" class="h-10 flex items-center gap-x-0.5 overflow-hidden">
    <div
      class="pl-3.5 h-full relative select-none shrink-0 flex items-center gap-x-2"
    >
      <MenuIcon size={18} />
      <span class="font-semibold ml-1">Kitstory</span>
      <div class="text-xs px-1.5 py-0.5 bg-red-600 rounded-md">DEV</div>
      <nav id="breadcrumbs">
        {@render breadcrumbs()}
        <!-- <button>Home</button> -->
      </nav>
    </div>
    <div
      data-tauri-drag-region
      class="h-full relative select-none flex-1"
    ></div>
    <!-- Right content -->
    {@render titlebarActions()}
    <!-- Window controls -->
    <hr class="h-5 border-l mx-1" />
    <button
      bind:this={minmizeButton}
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-400/75"
    >
      <MiniIcon size={19} />
    </button>
    <button
      bind:this={restoreButton}
      class="hidden py-1.5 h-full w-11 place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <RestoreIcon size={16} />
    </button>
    <button
      bind:this={maximizeButton}
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <MaxIcon size={14} />
    </button>
    <button
      bind:this={closeButton}
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-red-500/75"
    >
      <CloseIcon size={20} />
    </button>
  </div>
  {@render children()}
</div>
