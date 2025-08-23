<script>
  import "../styles.css";
  import "@fontsource/azeret-mono";

  import { getCurrentWindow } from "@tauri-apps/api/window";

  import {
    SquareIcon as MaxIcon,
    MinusIcon as MiniIcon,
    CopyIcon as RestoreIcon,
    XIcon as CloseIcon,
  } from "@lucide/svelte";

  const { children } = $props();
</script>

<div id="window-wrapper" class="grid grid-rows-[auto_1fr] h-[100dvh]">
  <div id="title-bar" class="h-9 flex items-center gap-x-0.5 overflow-hidden">
    <div class="relative select-none flex-1 text-sm flex items-center">
      <span data-tauri-drag-region="" class="z-50 absolute inset-0"></span>
      <div class="size-9 bg-purple-500"></div>
      <span class="px-2.5">Titlebar</span>
    </div>
    <button
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <MiniIcon size={19} />
    </button>
    <button
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <RestoreIcon size={16} />
    </button>
    <button
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-blue-500/75"
    >
      <MaxIcon size={14} />
    </button>
    <button
      class="py-1.5 h-full w-11 grid place-items-center cursor-pointer hover:bg-red-500/75"
    >
      <CloseIcon size={20} />
    </button>
  </div>
  <div id="container">
    {@render children()}
  </div>
</div>
