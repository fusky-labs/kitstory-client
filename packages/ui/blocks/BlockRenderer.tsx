"use client"

import { createContext, useContext, useState } from "react"
import type { PlotBlock } from "@ce-internal/config"

type OptionalPlotBlocks = Array<PlotBlock> | Array<never>

const BlockContext = createContext<{
  plotBlocks: OptionalPlotBlocks
  setPlotBlocks: React.Dispatch<React.SetStateAction<OptionalPlotBlocks>>
}>({
  plotBlocks: [],
  setPlotBlocks: () => {},
})

export const useBlockContext = () => useContext(BlockContext)

export function BlockRenderer({ children }: React.PropsWithChildren) {
  const [blocks, setBlocks] = useState<OptionalPlotBlocks>([])

  return (
    <BlockContext.Provider
      value={{ plotBlocks: blocks, setPlotBlocks: setBlocks }}
    >
      {children}
    </BlockContext.Provider>
  )
}
