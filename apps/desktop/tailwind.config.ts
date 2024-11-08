import type { Config } from "tailwindcss"
import { twConfig } from "@ce-internal/config"

const config: Config = {
  content: [
    "src/**/*.{ts,tsx}",
    "index.html",
    "../../packages/ui/**/*.{ts,tsx}"
  ],
  presets: [twConfig]
}

export default config