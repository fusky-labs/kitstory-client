"use client"

interface BlockTemplateProps {
  locked?: boolean
}

/** @internal */
export function BlockTemplate(
  props: React.PropsWithChildren<BlockTemplateProps>
) {
  return <section>{props.children}</section>
}
