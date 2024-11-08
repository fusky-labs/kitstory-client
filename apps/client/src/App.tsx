import { BlockRenderer, Button } from "@ce-internal/ui"
import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlockRenderer>
        <Button>Add new block</Button>
      </BlockRenderer>
    </>
  )
}
