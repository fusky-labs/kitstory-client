import { cn } from "@ce-internal/config"
import { cva, type VariantProps } from "class-variance-authority"

const button = cva([], {
  variants: {
    variant: {
      primary: "",
    },
    size: {
      small: "size:small px-1.5 py-1",
    },
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon?: boolean
}

export function Button({
  children,
  variant = "primary",
  size = "small",
  className,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button {...props} className={cn(button({ variant, size }), className)}>
      {children}
    </button>
  )
}
