import type { Config } from "tailwindcss"
import typographyPlugin from "@tailwindcss/typography"
import formsPlugin from "@tailwindcss/forms"

const config: Config = {
  content: [
    "./src/**/*.{ts,svelte}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typographyPlugin,
    formsPlugin
  ],
}

export default config