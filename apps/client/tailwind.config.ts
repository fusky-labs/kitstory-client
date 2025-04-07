import type { Config } from "tailwindcss"
import formsPlugin from "@tailwindcss/forms"

const config: Config = {
  content: [
    "./src/**/*.{svelte,ts}",
    "./index.html",
  ],
  presets: [formsPlugin]
}

export default config