<script lang="ts">
  import {
    ChevronDownIcon,
    CopyIcon,
    EllipsisVerticalIcon,
    LockOpen,
  } from "@lucide/svelte";
  import BlockBase from "./_BlockBase.svelte";
  import Button from "../components/Button.svelte";
</script>

<BlockBase
  _blockType="character"
  data-test-id="character-block"
  class="flex items-start gap-x-3.5"
>
  <div id="avatar-container">
    <div class="size-12 bg-amber-300 rounded-full shrink-0"></div>
  </div>
  <div class="flex-1 grid gap-y-2.5">
    <div id="char-name-status-layer" class="flex items-center space-x-2">
      <button class="flex gap-x-1 items-center hover:underline">
        <span class="font-semibold" translate="no">Kinny</span>
        <ChevronDownIcon size={18} />
      </button>
      <span class="align-middle text-sm opacity-75">last edited</span>
    </div>
    <textarea
      name="character-dialog"
      id="cd-block"
      class="dark:bg-neutral-800/40"
      autocapitalize="off"
      spellcheck="false"
    ></textarea>
    <div class="flex gap-x-1">
      <Button>
        {#snippet rightSlot()}
          <ChevronDownIcon size={18} />
        {/snippet}
        Add
      </Button>

      <Button>
        {#snippet leftSlot()}
          <CopyIcon size={16} />
        {/snippet}
        <span class="text-sm">Copy</span>
      </Button>
      <div id="button-group" class="flex">
        <Button>
          {#snippet leftSlot()}
            <LockOpen size={16} />
          {/snippet}
          <span class="text-sm">Lock</span>
        </Button>
        <Button>
          <ChevronDownIcon size={16} />
        </Button>
      </div>
      <Button>
        <EllipsisVerticalIcon size={16} />
      </Button>

      <!-- items from dropdown -->
      <!-- <Button>Solo</Button> -->
      <!-- <Button>Delete</Button> -->
      <!-- <Button>Duplicate</Button> -->
    </div>
  </div>
</BlockBase>
