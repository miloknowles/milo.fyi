import ExternalLink from "@/components/core/external-link";
import { Container, Flex, Heading, Section, Separator } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Milo Knowles | Writing',
  description: "Blog posts, papers, and other ideas I'm thinking about.",
}

const index = [
  {
    title: "Aerodynamic driving could reduce US emissions by 1%",
    href: "/blog/post/highway-drafting",
  },
  {
    title: "Part 2: The artificial photosynthesis revolution",
    href: "/blog/post/solar-to-food-part-2",
  },
  {
    title: "Part 1: Making food with air, water, and sunlight",
    href: "/blog/post/solar-to-food-part-1",
  },
  {
    title: "Green premium agreements",
    href: "/blog/post/green-premium-agreements",
  },
  {
    title: "Some types of startups should be nonprofit startups",
    href: "/blog/post/nonprofit-startups",
  },
  {
    title: "How should companies and individuals fund climate mitigation?",
    href: "/blog/post/funding-climate",
  },
  {
    title: "Blue Meadow: What I learned from a year as a solo founder",
    href: "/blog/post/blue-meadow",
  },
  {
    title: "[Article] What is consumed carbon intensity and why is it important?",
    href: "https://medium.com/singularity-energy/what-is-consumed-carbon-intensity-and-why-is-it-important-3e272ee3e08c",
  },
  {
    title: "[Paper] Toward Robust and Efficient Online Adaptation for Deep Stereo Depth Estimation (ICRA 2021)",
    href: "/knowles_icra_2021.pdf",
  },
  {
    title: "[Thesis] Toward robust deep stereo networks: uncertainty learning, novelty detection, and online adaptation",
    href: "https://dspace.mit.edu/handle/1721.1/129167",
  }
]


export default function Page() {
  return (
    <main className="min-h-screen">
      <Section size={{initial: "1", md: "3"}} pl="3" pr="3">
        <Container size="3">
          <Flex direction="column" gap="6">
            <Heading size="9">
              Writing
            </Heading>
            <Separator size="4"/>
            <Flex direction="column" gap="3">
              <Heading size="7">
                Blog
              </Heading>
              {
                index.map((item, index) => (
                  <ExternalLink key={index} href={item.href}>
                    {item.title}
                  </ExternalLink>
                ))
              }
            </Flex>
            <Flex direction="column" gap="3">
              <Heading size="7">
                Other
              </Heading>
              <ExternalLink href="https://medium.com/singularity-energy/what-is-consumed-carbon-intensity-and-why-is-it-important-3e272ee3e08c">
                [Article] What is consumed carbon intensity and why is it important?
              </ExternalLink>
              <ExternalLink href="/knowles_icra_2021.pdf">
                [Paper] Toward Robust and Efficient Online Adaptation for Deep Stereo Depth Estimation (ICRA 2021)
              </ExternalLink>
              <ExternalLink href="https://dspace.mit.edu/handle/1721.1/129167">
                [Thesis] Toward robust deep stereo networks: uncertainty learning, novelty detection, and online adaptation
              </ExternalLink>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}