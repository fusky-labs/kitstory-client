"use client"

import { Button } from "../Button"
import { GripVerticalIcon, PlusIcon } from "../icons"

interface BlockTemplateProps {
  locked?: boolean
}

/** @internal */
export function BlockTemplate(
  props: React.PropsWithChildren<BlockTemplateProps>
) {
  return (
    <section className="flex items-start" id="plot-block-wrapper">
      <div id="block-actions" className="inline-flex">
        <Button icon>
          <PlusIcon size={17} />
        </Button>
        <Button icon className="cursor-grab">
          <GripVerticalIcon size={17} />
        </Button>
      </div>
      <div id="main-block-content" className="flex-1">
        <div className="p-3 rounded-md border border-red-400">
          {props.children}
        </div>
      </div>
    </section>
  )
}
