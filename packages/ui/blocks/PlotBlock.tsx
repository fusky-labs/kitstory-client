"use client"
import { BlockTemplate } from "./BlockTemplate"
import { useBlockContext } from "./BlockRenderer"
import { PlotBlockTypes } from "@ce-internal/config"

interface PlotBlockProps {
  type: Exclude<PlotBlockTypes, "section">
  locked?: boolean
}

export function PlotBlock(props: PlotBlockProps) {
  const blockContext = useBlockContext()

  if (!blockContext) {
    throw new Error(
      "This element should be wrapped in `<BlockRenderer>, you dummy`"
    )
  }

  return (
    <BlockTemplate locked={props.locked}>
      <div>Character dropdown</div>
      <textarea name="" id="" className="w-full resize-y rounded-md"></textarea>
    </BlockTemplate>
  )
}
