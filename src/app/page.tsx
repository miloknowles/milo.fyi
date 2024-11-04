import { Text } from '@radix-ui/themes'

import { BlogPosts } from 'src/components/posts-index'
import ExternalLink from '../components/external-link'

export default function Page() {
  return (
    <section className="pt-8 pb-8">
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter fade-order-1">
        Hi, I'm <span className="text-primary">Milo</span> – a software engineer focused on climate.
      </h1>
      <div className="flex flex-col gap-4">
        <Text className="fade-order-2 text-lg">
          I studied Computer Science and Artificial Intelligence at MIT, where my research focused on vision for autonomous <ExternalLink href="https://www.csail.mit.edu/research/robust-robotics-group">robots</ExternalLink>.
          Since then, I've explored a lot of different technical areas: autonomous <ExternalLink href="https://www.linkedin.com/company/optimus-ride/">cars</ExternalLink>/<ExternalLink href="https://www.skydio.com/">drones</ExternalLink>,
          ocean farming, the <ExternalLink href="https://singularity.energy/">energy grid</ExternalLink>,
          carbon crediting, alternative proteins, and biomanufacturing. In two words, I'd say I’m a <ExternalLink href="https://nav.al/optimism">rational optimist</ExternalLink>;
          I like to spend my time thinking about how the world couldand should get even better.
        </Text>
        <Text className="fade-order-3 text-lg">
          The problems that I think and <ExternalLink href="/blog">write</ExternalLink> about the most are climate change and the food system. I believe that a sustainable food
          system is the most important lever for addressing climate change, and that we need more
          attention and innovation there.
        </Text>
        <Text className="fade-order-4 text-lg">
          Currently, I'm a software engineer at <ExternalLink href="https://www.synonym.bio">Synonym</ExternalLink>, which
          infrastructure for biomanufacturing.
          
          If you're working on biomanufacturing, alternative proteins, agriculture, or climate more broadly, I'd love to chat.
        </Text>
        <Text className="fade-order-5 text-lg">
          Outside of work, I enjoy <ExternalLink href="https://www.strava.com/athletes/6914634">triathlon</ExternalLink> and following endurance sports.
          You'll usually find me biking, running, or at the pool.
        </Text>
      </div>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
