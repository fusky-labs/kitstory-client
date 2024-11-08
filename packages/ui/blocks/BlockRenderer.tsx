"use client"

import { useState } from "react"
import { OptionalPlotBlocks, PlotBlockContext } from "./PlotBlockContext"

export function BlockRenderer({ children }: React.PropsWithChildren) {
  const [blocks, setBlocks] = useState<OptionalPlotBlocks>([])

  return (
    <PlotBlockContext.Provider
      value={{ plotBlocks: blocks, setPlotBlocks: setBlocks }}
    >
      {children}
    </PlotBlockContext.Provider>
  )
}
