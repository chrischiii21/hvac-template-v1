import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-highlight)] focus-visible:ring-offset-2 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[var(--brand-primary)] text-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(var(--brand-primary-rgb),0.3)] hover:-translate-y-1",
        destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:-translate-y-1 hover:shadow-md",
        outline: "border-2 border-[var(--brand-primary)]/20 bg-transparent text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5 hover:border-[var(--brand-primary)]/40 hover:-translate-y-1",
        secondary: "bg-[var(--brand-highlight)] text-[var(--brand-primary)] shadow-[0_10px_20px_-5px_rgba(var(--brand-highlight-rgb),0.3)] hover:shadow-[0_15px_30px_-5px_rgba(var(--brand-highlight-rgb),0.5)] hover:-translate-y-1 hover:brightness-110",
        ghost: "hover:bg-[var(--brand-primary)]/5 hover:text-[var(--brand-primary)] text-[var(--brand-primary)]/80",
        link: "text-[var(--brand-primary)] underline-offset-4 hover:underline hover:text-[var(--brand-highlight)]",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
