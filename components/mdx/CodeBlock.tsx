import { PropsWithChildren } from 'react'

interface CodeBlockProps extends PropsWithChildren {
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  return (
    <>
      {filename && (
        <div className="mt-6 bg-gray-800 px-4 py-2 text-gray-200 text-sm rounded-t-lg">
          {filename}
        </div>
      )}
      <pre className={`${filename ? '' : 'mt-6'} bg-gray-900 p-4 overflow-x-auto rounded-${filename ? 'b' : ''}-lg`}>
        <code className={`${language ? `language-${language}` : ''} text-gray-100`}>
          {children}
        </code>
      </pre>
    </>
  )
} 