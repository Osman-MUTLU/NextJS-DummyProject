import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';


const cardWrapperVariants = cva(
    "overflow-y-auto border backdrop-blur-lg drop-shadow-md rounded-3xl",
    {
        variants: {
            variant: {
                glass:
                    " dark:border-white/20 dark:bg-white/10 dark:border-white/20",
            }
        },
        defaultVariants: {
            variant: "glass"
        },
    }
)
export interface CardWrapperProps
    extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardWrapperVariants> {
    asChild?: boolean
}

const CardWrapper = React.forwardRef<HTMLDivElement, CardWrapperProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Card : "div"
        return (
            <Comp
                className={cn(cardWrapperVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
CardWrapper.displayName = "CardWrapper"

export default CardWrapper