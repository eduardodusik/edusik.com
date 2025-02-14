export default function BlogPost({
  children,
  title,
  date,
  description
}: {
  children: React.ReactNode
  title: string
  date: string
  description: string
}) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto py-8">
      <header>
        <h1>{title}</h1>
        <time>{new Date(date).toLocaleDateString()}</time>
        <p>{description}</p>
      </header>
      {children}
    </article>
  )
} 