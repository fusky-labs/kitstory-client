import { cva } from "class-variance-authority"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "small" | "big"
  icon?: boolean
}

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  const button = cva(["rounded-md", props.className], {
    variants: {
      variant: {
        primary: "border border-red-400",
        secondary: "hover:bg-red-300",
      },
      size: {
        small: !props.icon ? "px-1.5 py-1" : "p-1.5",
        big: !props.icon ? "px-1.5 py-1" : "p-1",
      },
    },
  })

  const { icon, variant, ...validProps } = props

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
