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
    <section className="relative">
      <div id="block-actions">
        <Button icon>
          <GripVerticalIcon size={17} />
        </Button>
        <Button icon>
          <PlusIcon size={17} />
        </Button>
      </div>
      <div>{props.children}</div>
    </section>
  )
}
