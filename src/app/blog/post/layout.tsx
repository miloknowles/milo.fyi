import 'katex/dist/katex.min.css';

// https://github.com/vercel/examples/blob/main/solutions/blog/app/blog/%5Bslug%5D/page.tsx
export default function Blog({ children }) {
  return (
    <section className="pt-8 pb-8">
      <article className="prose">
        {children}
      </article>
    </section>
  )
}
