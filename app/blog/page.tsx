import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-75">
              <h2 className="text-2xl font-semibold mb-2">{post.metadata.title}</h2>
              <p className="text-gray-600 mb-2">{post.metadata.description}</p>
              <time className="text-sm text-gray-500">
                {new Date(post.metadata.date).toLocaleDateString()}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}