import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPost, getPostSlugs } from '@/lib/posts'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return await getPostSlugs()
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const { slug } = await props.params
    const post = await getPost(slug)

    if (!post || !post.Content) {
        notFound()
    }

    const { metadata } = post

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            type: 'article',
            publishedTime: metadata.date,
            authors: metadata.author,
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
        }
    }
}

export const dynamicParams = false

export default async function Post(props: Props) {
    const { slug } = await props.params
    const post = await getPost(slug)

    if (!post || !post.Content) {
        notFound()
    }

    const { Content } = post

    return (
        <div className="max-w-4xl mx-auto py-8 prose lg:prose-xl flex flex-col gap-4">
            <Content.default />
        </div>
    )
} 