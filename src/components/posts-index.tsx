import Link from "next/link";
import { formatDate, getBlogPosts } from "@/lib/blog";

export default function BlogPostsIndex() {
  const allBlogs = getBlogPosts();
  const sorted = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div>
      {sorted.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/post/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-500 w-[150px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-800 tracking-tight font-medium">
              {post.metadata.title}
              {post.metadata.subtitle ? ":" : ""} {post.metadata.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
