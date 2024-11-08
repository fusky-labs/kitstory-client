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
    <section className="relative flex p-2.5 rounded-md border border-red-400">
      <div id="block-actions" className="absolute top-3 -left-16">
        <Button icon>
          <PlusIcon size={17} />
        </Button>
        <Button icon className="cursor-grab">
          <GripVerticalIcon size={17} />
        </Button>
      </div>
      <div id="main-block-content" className="flex-1">
        {props.children}
      </div>
    </section>
  )
}
