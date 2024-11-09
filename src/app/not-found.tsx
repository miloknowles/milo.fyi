import { Link } from "@radix-ui/themes";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start mt-[30%]">
      <h1 className="mb-8 text-6xl font-semibold tracking-tighter">
        404
      </h1>
      <p className="mb-4 font-medium">The page you are looking for does not exist. <Link href="/">Return home?</Link></p>
    </section>
  )
}
