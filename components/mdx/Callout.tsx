import { PropsWithChildren } from 'react'

type CalloutType = 'info' | 'warning' | 'tip'

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType
  title?: string
}

const styles = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  tip: 'bg-green-50 border-green-200 text-green-800'
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  return (
    <aside className={`my-6 border-l-4 p-4 rounded-r-lg ${styles[type]}`}>
      {title && <strong className="block font-semibold mb-2">{title}</strong>}
      {children}
    </aside>
  )
} 