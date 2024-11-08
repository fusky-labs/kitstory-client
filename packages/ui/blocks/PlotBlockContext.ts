"use client"

import { createContext, useContext, useState } from "react"
import type { PlotBlock } from "@ce-internal/config"

export type OptionalPlotBlocks = Array<PlotBlock> | Array<never>

export const PlotBlockContext = createContext<{
  plotBlocks: OptionalPlotBlocks
  setPlotBlocks: React.Dispatch<React.SetStateAction<OptionalPlotBlocks>>
}>({
  plotBlocks: [],
  setPlotBlocks: () => { },
})

// Methods for mutating some bloccs


export const useBlockContext = () => useContext(PlotBlockContext)