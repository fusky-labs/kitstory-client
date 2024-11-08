import { BlockRenderer, PlotBlock } from "@ce-internal/ui"

export default function App() {
  return (
    <div className="px-8 mx-auto max-w-screen-xl">
      <BlockRenderer>
        <PlotBlock type="dialogue" />
      </BlockRenderer>
    </div>
  )
}
