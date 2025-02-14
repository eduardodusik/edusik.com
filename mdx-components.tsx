import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from '@/components/mdx/CodeBlock'
import { Callout } from '@/components/mdx/Callout'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),

    a: ({ href, children }) => (
      <Link 
        href={href || ''}
        className="text-blue-600 hover:text-blue-800 underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="my-4 ml-6 space-y-2 list-disc marker:text-gray-500">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 space-y-2 list-decimal marker:text-gray-500">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="pl-2">{children}</li>
    ),

    p: ({ children }) => (
      <p className="my-4 leading-relaxed">{children}</p>
    ),

    pre: ({ children }) => children,
    code: ({ className, children, ...props }) => {
      if (typeof children === 'string' && !className) {
        return <code className="bg-gray-100 rounded px-1 py-0.5">{children}</code>
      }

      const language = className?.replace('language-', '')
      return (
        <CodeBlock language={language} {...props}>
          {children}
        </CodeBlock>
      )
    },

    Callout,
    ...components,
  }
}