import { Link, Separator } from "@radix-ui/themes";

// A header shown at the top of a blog post.
export default function Header({ title, subtitle, publishedAt }) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <header className="mb-8 flex flex-col">
      <Link href="/blog" className="text-neutral-600 dark:text-neutral-400">
        ← Back
      </Link>
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && subtitle !== "" && (
        <div className="text-neutral-600 dark:text-neutral-400 text-lg">
          {subtitle}
        </div>
      )}
      <span className="text-neutral-600 dark:text-neutral-400 my-2 font-medium">
        {formattedDate}
      </span>
      <Separator className="w-full mt-4" />
    </header>
  );
}
