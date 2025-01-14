import { Badge, Container, Flex, Heading, Link, Section, Separator, Text } from "@radix-ui/themes";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Milo Knowles | Writing',
  description: "Blog posts, papers, and other ideas I'm thinking about.",
}


export default function Page() {
  return (
    <main className="min-h-screen">
      <Section size={{initial: "1", md: "3"}} pl="3" pr="3">
        <Container size="3">
          <Flex direction="column" gap="7">
            <Heading size="9">
              Writing
            </Heading>
            <Separator size="4"/>
            <Flex direction="column" gap="3">
              <Heading size="7">
                Blog
              </Heading>
              <Link href="/blog/artificial-photosynthesis-part-2">
                Part 2: The artificial photosynthesis revolution
              </Link>
              <Link href="/blog/stored-sunlight-part-1">
                Part 1: Making food with air, water, and sunlight
              </Link>
              <Link href="/blog/green-premium-agreements">
                Green premium agreements
              </Link>
              <Link href="/blog/nonprofit-startups">
                Some types of startups should be nonprofit startups
              </Link>
              <Link href="/blog/funding-climate">
                How should companies and individuals fund climate mitigation?
              </Link>
              <Link href="/blog/bluemeadow">
                Blue Meadow: What I learned from a year as a solo founder
              </Link>
            </Flex>
            <Flex direction="column" gap="3">
              <Heading size="7">
                Other
              </Heading>
              <Link href="https://medium.com/singularity-energy/what-is-consumed-carbon-intensity-and-why-is-it-important-3e272ee3e08c" target="_blank">
                [Article] What is consumed carbon intensity and why is it important?
              </Link>
              <Link href="/knowles_icra_2021.pdf" target="_blank">
                [Paper] Toward Robust and Efficient Online Adaptation for Deep Stereo Depth Estimation (ICRA 2021)
              </Link>
              <Link href="https://dspace.mit.edu/handle/1721.1/129167" target="_blank">
                [Thesis] Toward robust deep stereo networks: uncertainty learning, novelty detection, and online adaptation
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}