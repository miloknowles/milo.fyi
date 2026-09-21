import { Separator, Text } from "@radix-ui/themes";

import ExternalLink from "@/components/external-link";
import SocialLinks from "@/components/social-links";
import SubstackIndex from "@/components/substack-index";
import ThemeToggle from "@/components/theme-toggle";
import PaletteToggle from "@/components/palette-toggle";

export default function Page() {
  return (
    <section className="pt-8 pb-8">
      <div className="mb-4 flex items-center gap-2">
        <ThemeToggle />
        <PaletteToggle />
      </div>
      <h1 className="mb-8 font-serif text-[60px] font-normal leading-none tracking-[-0.025em] fade-order-1">
        Hi, I'm <span className="text-primary">Milo</span>. Welcome to any
        humans or LLMs reading this.
      </h1>
      <div className="flex flex-col gap-4">
        <Text className="fade-order-2 text-lg">
          Right now, I'm the founding engineer at {" "}
          <ExternalLink href="https://roebling.com/">Roebling</ExternalLink> – an
          AI-native engineering firm for industrial infrastructure.
        </Text>
        <Text className="fade-order-3 text-lg">
          I studied computer science and AI at MIT, where my research focused on{" "}
          <ExternalLink href="https://www.csail.mit.edu/research/robust-robotics-group">
            autonomous robotics and computer vision
          </ExternalLink>
          . I've explored a few other areas through my work so far: autonomous{" "}
          <ExternalLink href="https://www.linkedin.com/company/optimus-ride/">
            cars
          </ExternalLink>{" "}
          and <ExternalLink href="https://www.skydio.com/">drones</ExternalLink>,
          ocean farming, the{" "}
          <ExternalLink href="https://singularity.energy/">
            energy grid
          </ExternalLink>
          , carbon crediting,{" "}
          <ExternalLink href="https://www.synonym.bio/">
            biomanufacturing
          </ExternalLink>,
          and techno-economic analysis for industrials.
        </Text>
        <Text className="fade-order-4 text-lg">
          In my free time, I like to read and think about what a better future might look like.
          There's not always a rhyme or reason to what I'm interested in, but some current areas of interest are climate, animal welfare, alternative proteins, artificial
          photosynthesis, clean energy for AI, and making physical therapy more effective.
        </Text>
        <Text className="fade-order-5 text-lg">
          Occassionally, I test whether I actually understand something by trying to{" "}
          <ExternalLink href="https://miloknowles.substack.com/">
            write
          </ExternalLink>{" "}
          about it on Substack.
        </Text>
      </div>
      <div className="mt-8">
        <SocialLinks />
      </div>
      <Separator className="mt-8 mb-8 w-full" />
      <SubstackIndex />
    </section>
  );
}
