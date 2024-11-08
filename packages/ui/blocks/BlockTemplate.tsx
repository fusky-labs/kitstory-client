"use client"

import { Button } from "../Button"
import { CommentIcon, GripVerticalIcon, LockIcon, PlusIcon } from "../icons"

interface BlockTemplateProps {
  locked: boolean
  comments: boolean
}

/** @internal */
export function BlockTemplate(
  props: React.PropsWithChildren<Partial<BlockTemplateProps>>
) {
  return (
    <section className="relative" id="plot-block-wrapper">
      <div className="absolute top-0 left-0 -translate-x-full pr-3">
        <div
          id="block-detail-indicator"
          className="flex flex-col items-end gap-y-0.5"
        >
          <span
            id="block-actions"
            className="justify-end flex-row !gap-x-1 mb-1.5"
          >
            <Button icon>
              <PlusIcon size={21} />
            </Button>
            <Button icon className="cursor-grab">
              <GripVerticalIcon size={21} />
            </Button>
          </span>

          {props.comments ? (
            <Button
              variant="secondary"
              className="inline-flex items-center gap-x-1"
            >
              <CommentIcon size={17} />
              <span id="count">3</span>
            </Button>
          ) : null}
          {props.locked ? (
            <Button
              variant="secondary"
              className="inline-flex items-center gap-x-1"
            >
              <LockIcon size={17} />
              <span>Locked</span>
            </Button>
          ) : null}
        </div>
      </div>

      <div id="main-block-content" className="flex-1">
        <div className="p-3 rounded-md border border-red-400">
          {props.children}
        </div>
      </div>
    </section>
  )
}
