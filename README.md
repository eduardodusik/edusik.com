# Personal Blog with Next.js and MDX

A modern, performant blog built with Next.js 14, MDX, and TypeScript. Features static site generation, SEO optimization, and custom MDX components.

## 🚀 Features

- **Next.js 15 App Router**
- **MDX Support** for writing content in Markdown with React components
- **Static Site Generation** for optimal performance
- **SEO Optimized** with metadata, OpenGraph, and Twitter cards
- **TypeScript** for type safety
- **Custom MDX Components** for rich content
- **Tailwind CSS** for styling

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📁 Project Structure

```
├── app/
│   ├── blog/
│   │   ├── page.tsx           # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic blog post page
│   └── articles/              # MDX blog posts
├── components/
│   └── mdx/                   # Custom MDX components
│       ├── CodeBlock.tsx
│       └── Callout.tsx
├── lib/
│   └── posts.ts              # Post utilities
└── mdx-components.tsx        # MDX component configuration
```

## 🏗 Architecture

### Blog System

The blog uses Next.js App Router with MDX for content management. Key features include:

#### Static Generation
```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return await getPostSlugs()
}

export const dynamicParams = false // 404 for non-existent slugs
```

#### SEO Optimization
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    // ... other metadata
  }
}
```

#### MDX Posts
Blog posts are written in MDX format with front matter:
```mdx
export const metadata = {
  title: 'Post Title',
  description: 'Post description',
  date: '2024-03-20'
}

# Content here
```

### Custom Components

The blog includes several custom MDX components:

#### CodeBlock
```typescript
<CodeBlock language="typescript" filename="example.ts">
  // Your code here
</CodeBlock>
```

#### Callout
```typescript
<Callout type="info" title="Note">
  Important information here
</Callout>
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-blog.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📝 Creating Blog Posts

1. Create a new `.mdx` file in `app/articles/`
2. Add metadata using the export syntax
3. Write your content using Markdown and custom components
4. The post will be automatically added to the blog listing

Example:
```mdx
export const metadata = {
  title: 'My New Post',
  description: 'Description here',
  date: '2024-03-20'
}

# My New Post

<Callout type="info">
  Welcome to my post!
</Callout>

Content here...
```

## 🔧 Customization

### Adding New MDX Components

1. Create component in `components/mdx/`
2. Add to `mdx-components.tsx`
3. Use in MDX files

### Styling

- Uses Tailwind CSS for styling
- Custom components are styled using Tailwind classes
- Typography styles are configured in `mdx-components.tsx`

## 📈 Performance

- Static site generation for optimal loading
- Automatic image optimization
- Metadata generation for SEO
- Pre-rendered pages for instant loading

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
