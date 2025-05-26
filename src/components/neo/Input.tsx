import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            w-full px-4 py-3
            bg-white border-4 border-black
            font-mono text-base
            placeholder:text-gray-400
            focus:outline-none focus:ring-0
            focus:shadow-neo
            transition-shadow duration-150
            disabled:cursor-not-allowed disabled:opacity-50
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input } 