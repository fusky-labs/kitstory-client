import type { Snippet, Component } from "svelte";
import type { IconProps } from "@lucide/svelte";

export interface SharedProps {
  children?: Snippet;
  rightSlot?: Snippet;
  icon?: Component<IconProps>;
  active?: boolean;
  disabled?: boolean;
}