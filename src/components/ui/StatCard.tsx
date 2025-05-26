import { cn } from '@/lib/utils'

interface StatCardProps {
  number: string | number
  label: string
  color?: string
  className?: string
}

export function StatCard({ number, label, color = 'bg-electric-blue', className }: StatCardProps) {
  return (
    <div className={cn(
      'p-8 border-4 border-white text-center',
      color,
      className
    )}>
      <div className="font-display font-black text-4xl md:text-5xl mb-2">
        {number}
      </div>
      <div className="font-bold text-sm uppercase tracking-wider opacity-90">
        {label}
      </div>
    </div>
  )
} 