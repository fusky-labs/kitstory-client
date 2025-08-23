<script lang="ts">
  import { MenuIcon, UserCircleIcon } from "@lucide/svelte";
  import { Button } from "@kitstory/ui";
</script>

<nav class="flex items-center justify-between px-3 py-(--nav-padding-y)">
  <!-- Left -->
  <div class="flex items-center gap-x-2">
    <Button class="p-2">
      <MenuIcon size={20} />
    </Button>
    <a href="/">Kitstory</a>
  </div>
  <!-- Right -->
  <div>
    <Button>
      {#snippet leftSlot()}
        <UserCircleIcon size={20} />
      {/snippet}
      Login
    </Button>
  </div>
</nav>
