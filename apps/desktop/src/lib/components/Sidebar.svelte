<script lang="ts">
  import MenuItem from "@kitstory/ui/components/MenuItem.svelte";
  import MenuItemGroup from "@kitstory/ui/components/MenuItemGroup.svelte";
  import MenuHeadingGroup from "@kitstory/ui/components/MenuHeadingGroup.svelte";

  import {
    SettingsIcon,
    UsersRoundIcon,
    ZapIcon,
    HouseIcon,
    Clock4Icon,
    BookOpenIcon,
    PackageIcon,
    SquareKanbanIcon,
    Plug2Icon,
    LibraryBigIcon,
    TagsIcon,
    ChevronRight,
    CloudOffIcon,
    ChevronRightIcon,
    LayoutTemplateIcon,
    SparklesIcon,
    BookIcon,
    ScrollTextIcon,
    MapPinIcon,
    ShapesIcon,
  } from "@lucide/svelte";
</script>

<aside
  data-ks-global-sidebar=""
  style="--g-sidebar-width: 350px"
  class="relative h-[calc(100dvh-2.5rem)] overflow-y-auto overflow-x-hidden"
>
  <nav
    data-root-navigation=""
    class="w-(--g-sidebar-width) px-3.5 py-3 space-y-4 pb-20"
  >
    <div>
      <div
        class="mx-0.5 border mb-2.5 mt-2 rounded-md bg-neutral-950 border-neutral-700 z-10"
      >
        <button
          class="grid grid-cols-[auto_1fr] items-center gap-x-2 grid-rows-2 text-left py-2 pl-2.5"
        >
          <div class="row-span-2 size-10 rounded-full bg-red-400"></div>
          <span class="font-bold truncate">Project Name</span>
          <div>
            <CloudOffIcon size={16} class="inline-block align-middle" />
            <span class="text-sm">Local only</span>
            <ChevronRightIcon size={16} class="inline-block align-middle" />
          </div>
        </button>
      </div>
      <MenuItem icon={HouseIcon}>Home</MenuItem>
      <MenuItem icon={Clock4Icon}>Recents</MenuItem>
      <MenuItem icon={ZapIcon}>Automation</MenuItem>
    </div>
    <MenuHeadingGroup label="Worldbuilding">
      <MenuItem icon={TagsIcon}>Drafts</MenuItem>
      <MenuItem icon={LayoutTemplateIcon}>Mood board</MenuItem>
      <MenuItem icon={SquareKanbanIcon}>Tasks & Boards</MenuItem>
    </MenuHeadingGroup>

    <MenuHeadingGroup label="Content">
      <MenuItemGroup icon={LibraryBigIcon} label="Asset library">
        <MenuItem icon={TagsIcon}>Scripts</MenuItem>
        <MenuItem icon={TagsIcon}>Storyboards</MenuItem>
        <MenuItem icon={TagsIcon}>Media</MenuItem>
        <MenuItem icon={TagsIcon}>Audio</MenuItem>
      </MenuItemGroup>

      <MenuItem icon={ShapesIcon}>Characters</MenuItem>
      <MenuItem icon={MapPinIcon}>Locations & Mapping</MenuItem>
      <MenuItem icon={ScrollTextIcon}>Lore</MenuItem>
      <MenuItemGroup icon={BookIcon} label="Documentation">
        <MenuItem icon={SparklesIcon}>Branding</MenuItem>
        <MenuItem icon={PackageIcon}>Press Kits</MenuItem>
        <MenuItem icon={BookOpenIcon}>Wikis</MenuItem>
      </MenuItemGroup>
    </MenuHeadingGroup>
    <MenuHeadingGroup label="Admin">
      <MenuItem icon={Plug2Icon}>Integrations</MenuItem>
      <MenuItem icon={UsersRoundIcon}>Members</MenuItem>
      <MenuItem icon={UsersRoundIcon}>Audit logs</MenuItem>
    </MenuHeadingGroup>
    <div>
      <MenuItem icon={SettingsIcon}>
        Advanced settings
        {#snippet rightSlot()}
          <ChevronRight size={19} class="mr-2" />
        {/snippet}
      </MenuItem>
    </div>
  </nav>
  <nav class="w-(--g-sidebar-width) px-3.5 py-3 fixed bottom-0 bg-black">
    <MenuItem icon={SettingsIcon}>Settings</MenuItem>
  </nav>
</aside>
