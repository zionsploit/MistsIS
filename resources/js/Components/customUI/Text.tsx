import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React, { ReactNode } from "react"

const textVariants = cva(
    "tracking-wide",
    {
        variants: {
            variant: {
                default: "font-medium",
                headingSmall: "font-semibold text-lg",
                p: "text-sm font-semibold tracking-wide",
                h4: "text-lg font-semibold tracking-wide"
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

const Text = React.forwardRef<
    HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof textVariants>
>(({ className, variant, ...props }, ref) => (
    <p 
        ref={ref}
        role="heading"
        className={cn(textVariants({ variant }), className)}
        {...props}
    />
))

Text.displayName = "Text"

export { Text as default }