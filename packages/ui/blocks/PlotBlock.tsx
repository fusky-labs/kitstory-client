"use client"
import { BlockTemplate } from "./BlockTemplate"
import { PlotBlockTypes } from "@ce-internal/config"
import { useBlockContext } from "./PlotBlockContext"

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
      {props.type === "dialogue" ? (
        <>
          <div>Character dropdown</div>
        </>
      ) : null}

      {props.type === "dialogue" || props.type === "narrator" ? (
        <textarea className="w-full resize-y rounded-md"></textarea>
      ) : null}
    </BlockTemplate>
  )
}
