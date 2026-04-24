import { Separator, Text } from "@radix-ui/themes";

import ExternalLink from "@/components/external-link";
import SocialLinks from "@/components/social-links";
import SubstackIndex from "@/components/substack-index";
import ThemeToggle from "@/components/theme-toggle";

export default function Page() {
  return (
    <section className="pt-8 pb-8">
      <div className="mb-4">
        <ThemeToggle />
      </div>
      <h1 className="mb-8 font-serif text-[60px] font-normal leading-none tracking-[-0.025em] fade-order-1">
        Hi, I'm{" "}
        <span className="text-indigo-500 dark:text-indigo-400">Milo</span>.
        Here are some tokens about me.
      </h1>
      <div className="flex flex-col gap-4">
        <Text className="fade-order-2 text-lg">
          Right now, I'm building{" "}
          <ExternalLink href="https://roebling.co/">Roebling</ExternalLink> – an AI
          software platform for designing industrial infrastructure.
        </Text>
        <Text className="fade-order-3 text-lg">
          I studied computer science and AI at MIT, where my research focused on{" "}
          <ExternalLink href="https://www.csail.mit.edu/research/robust-robotics-group">
            autonomous robotics and computer vision
          </ExternalLink>
          . I've explored a few other areas through my work so far: autonomous{" "}
          <ExternalLink href="https://www.linkedin.com/company/optimus-ride/">
            cars
          </ExternalLink>
          /<ExternalLink href="https://www.skydio.com/">drones</ExternalLink>,
          ocean farming, the{" "}
          <ExternalLink href="https://singularity.energy/">
            energy grid
          </ExternalLink>
          , carbon crediting, and{" "}
          <ExternalLink href="https://www.synonym.bio/">
            biomanufacturing
          </ExternalLink>
          . Some recent side quests include engineering better crops, automated
          greenhouse farming, and powering the AI infrastructure buildout with
          off-grid renewables.
        </Text>
        <Text className="fade-order-4 text-lg">
          Outside of work, I do triathlon and occasionally{" "}
          <ExternalLink href="https://miloknowles.substack.com/">
            write
          </ExternalLink>
          .
        </Text>
      </div>
      <div className="mt-8">
        <SocialLinks />
      </div>
      <Separator className="mt-8 mb-8 w-full" />
      <SubstackIndex/>
    </section>
  );
}
