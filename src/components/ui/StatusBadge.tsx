import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: 'received' | 'under_review' | 'revision' | 'accepted' | 'published' | 'rejected'
  className?: string
}

const statusConfig = {
  received: {
    label: 'RECEIVED',
    className: 'bg-gray-200 text-black border-black'
  },
  under_review: {
    label: 'UNDER REVIEW',
    className: 'bg-warning text-black border-black'
  },
  revision: {
    label: 'REVISION NEEDED',
    className: 'bg-orange-dark text-white border-black'
  },
  accepted: {
    label: 'ACCEPTED',
    className: 'bg-success text-white border-black'
  },
  published: {
    label: 'PUBLISHED',
    className: 'bg-accent text-white border-black'
  },
  rejected: {
    label: 'REJECTED',
    className: 'bg-error text-white border-black'
  }
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider',
        'border-2 border-black',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  )
} 