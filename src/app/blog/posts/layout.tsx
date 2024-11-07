import { notFound } from 'next/navigation'
import { CustomMDX } from 'src/components/mdx'
import { formatDate, getBlogPosts } from 'src/app/blog/utils'
import { baseUrl } from 'src/app/sitemap'

import 'katex/dist/katex.min.css';

// export async function generateStaticParams() {
//   let posts = getBlogPosts()

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// export function generateMetadata({ params }) {
//   let post = getBlogPosts().find((post) => post.slug === params.slug)
//   if (!post) {
//     return
//   }

//   let {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata
//   let ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

export default function Blog({ children }) {
  // const index = getBlogPosts();

  return (
    <section className="pt-8 pb-8">
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Milo Knowles',
            },
          }),
        }}
      /> */}
      {/* <h1 className="title font-semibold text-3xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 font-medium">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div> */}
      <article className="prose">
        {children}
      </article>
    </section>
  )
}
