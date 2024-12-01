import { Separator, Text } from "@radix-ui/themes";

import ExternalLink from "@/components/external-link";
import BlogPostsIndex from "@/components/posts-index";

export default function Page() {
  return (
    <section className="pt-8 pb-8">
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter fade-order-1">
        Hi, I'm <span className="text-indigo-500 dark:text-indigo-400">Milo</span> – a software
        engineer focused on climate.
      </h1>
      <div className="flex flex-col gap-4">
        <Text className="fade-order-2 text-lg">
          I studied computer science at MIT, where my research focused on{" "}
          <ExternalLink href="https://www.csail.mit.edu/research/robust-robotics-group">
            autonomous robotics and computer vision
          </ExternalLink>
          . I've explored a few different areas through my work: autonomous{" "}
          <ExternalLink href="https://www.linkedin.com/company/optimus-ride/">
            cars
          </ExternalLink>
          /<ExternalLink href="https://www.skydio.com/">drones</ExternalLink>,
          ocean farming, the{" "}
          <ExternalLink href="https://singularity.energy/">
            energy grid
          </ExternalLink>
          , carbon crediting, alternative proteins, and biomanufacturing.
        </Text>
        <Text className="fade-order-3 text-lg">
          The goal of this blog is{" "}
          <ExternalLink href="https://nav.al/optimism">
            rational optimism
          </ExternalLink>
          ; I'd like to clarify my own thinking about how the world could and
          should get even better. Right now, I'm focused on climate change, the
          food system, and learning about synthetic biology.
        </Text>
        <Text className="fade-order-4 text-lg">
          By day, I'm a software engineer at{" "}
          <ExternalLink href="https://www.synonym.bio">Synonym</ExternalLink>,
          which builds infrastructure for biomanufacturing. If you're working on
          biomanufacturing, alternative proteins, agriculture, or climate more
          broadly, I'd love to chat.
        </Text>
        <Text className="fade-order-5 text-lg">
          Outside of work, I'm a{" "}
          <ExternalLink href="https://www.strava.com/athletes/6914634">
            triathlon
          </ExternalLink>{" "}
          enthusiast and enjoy following endurance sports. You'll usually find
          me biking, running, or at the pool.
        </Text>
      </div>
      <Separator className="mt-8 mb-8 w-full" />
      <BlogPostsIndex />
    </section>
  );
}
