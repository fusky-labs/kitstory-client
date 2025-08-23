<script lang="ts">
  import Meta from "$lib/components/Meta.svelte";
  import { BlockCharacter } from "@kitstory/ui/blocks";
  import { Button } from "@kitstory/ui";
  import { ChevronDownIcon } from "@lucide/svelte";
</script>

<Meta title="Home" />
<div class="flex">
  <div class="flex-1">
    <div id="storyblock-container" class="relative grid gap-y-4 px-6">
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <BlockCharacter />
      <div
        id="character-selection-shelf"
        class="flex flex-wrap gap-2 ml-16 px-2"
      >
        <Button>
          {#snippet leftSlot()}
            <div class="bg-amber-400 size-5 rounded-full"></div>
          {/snippet}
          Kinny
        </Button>
        <Button>
          {#snippet leftSlot()}
            <div class="bg-amber-400 size-5 rounded-full"></div>
          {/snippet}
          Kuro
        </Button>
        <Button>
          {#snippet leftSlot()}
            <div class="bg-amber-400 size-5 rounded-full"></div>
          {/snippet}
          Naomi
        </Button>
        <Button>
          <ChevronDownIcon size={18} />
        </Button>
      </div>
    </div>
  </div>
  <div class="shrink-0 bg-red-800 p-2.5">output panel</div>
</div>
