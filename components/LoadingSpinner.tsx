interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Chargement...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className={`${sizeClasses[size]} border-2 border-zinc-200 dark:border-zinc-700 border-t-indigo-600 rounded-full animate-spin mb-4`}></div>
      {text && (
        <p className={`${textSizes[size]} text-zinc-600 dark:text-zinc-400`}>
          {text}
        </p>
      )}
    </div>
  )
} 