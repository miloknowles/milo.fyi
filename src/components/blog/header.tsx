import { Separator } from "@radix-ui/themes"

// A header shown at the top of a blog post.
export default function Header({ title, publishedAt }) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return (
    <header className="mb-8">
      <Separator className="w-full"/>
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="text-neutral-600 font-medium">{formattedDate}</span>
      <Separator className="w-full mt-4"/>
    </header>
  )
}