import { cn } from "@ce-internal/config"
import { cva, type VariantProps } from "class-variance-authority"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "small" | "big"
  icon?: boolean
}

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  const button = cva(["border rounded-md border-red-400", props.className], {
    variants: {
      variant: {
        primary: "",
        secondary: "",
      },
      size: {
        small: !props.icon ? "px-1.5 py-1" : "p-1.5",
        big: !props.icon ? "px-1.5 py-1" : "p-1",
      },
    },
  })

  const { icon, ...validProps } = props

  return (
    <button
      {...validProps}
      className={button({
        variant: props.variant || "primary",
        size: props.size || "small",
      })}
    >
      {props.children}
    </button>
  )
}
