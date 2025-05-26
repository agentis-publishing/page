import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import Link from 'next/link'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-150 border-3 border-black active:translate-x-1 active:translate-y-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: [
          'bg-accent text-white',
          'shadow-neo hover:shadow-neo-hover',
          'active:shadow-none',
          'hover:bg-accent-hover'
        ],
        secondary: [
          'bg-black text-white',
          'shadow-neo hover:shadow-neo-hover',
          'active:shadow-none',
          'hover:bg-gray-800'
        ],
        accent: [
          'bg-orange-light text-white',
          'shadow-neo hover:shadow-neo-hover',
          'active:shadow-none',
          'hover:bg-orange-dark'
        ],
        outline: [
          'bg-white text-black border-black',
          'shadow-neo hover:shadow-neo-hover',
          'active:shadow-none',
          'hover:bg-light-gray'
        ],
        ghost: [
          'bg-transparent text-black border-0 shadow-none',
          'hover:bg-light-gray',
          'active:translate-x-0 active:translate-y-0'
        ]
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 