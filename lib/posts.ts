import fs from 'fs'
import path from 'path'

export interface PostMetadata {
  title: string
  description: string
  date: string
  author?: string
  tags?: string[]
  image?: string
}

export interface Post {
  slug: string
  metadata: PostMetadata
}

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'app/articles')
  const files = fs.readdirSync(postsDirectory)
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const Content = await import(`@/app/articles/${file}`)
        const metadata = Content.metadata || {}
        
        return {
          slug: file.replace('.mdx', ''),
          metadata: metadata as PostMetadata
        }
      })
  )

  return posts.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
}

export async function getPost(slug: string) {
  if (!slug) {
    return null
  }

  try {
    const Content = await import(`@/app/articles/${slug}.mdx`).catch(() => null)
    
    if (!Content) {
      return null
    }

    return {
      Content,
      metadata: Content.metadata as PostMetadata
    }
  } catch (e) {
    return null
  }
}

export async function getPostSlugs() {
  const postsDirectory = path.join(process.cwd(), 'app/articles')
  const files = fs.readdirSync(postsDirectory)
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace('.mdx', '')
    }))
} 