export default function Page({ children }) {

  return (
    <section className="pt-8 pb-8">
      <article className="prose">
        {children}
      </article>
    </section>
  )
}