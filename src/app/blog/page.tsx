import SubstackIndex from "@/components/substack-index";

export const metadata = {
  title: "Milo Knowles | Writing",
  description: "Some of the things I've written",
};

export default function Page() {
  return (
    <section className="pt-8 pb-8">
      <SubstackIndex/>
    </section>
  );
}
