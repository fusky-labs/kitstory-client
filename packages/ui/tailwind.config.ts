import type { Config } from "tailwindcss"
import { twConfig } from "@ce-internal/config"

const config: Config = {
  content: ["/**/*.{ts,tsx}"],
  presets: [twConfig]
}

export default config