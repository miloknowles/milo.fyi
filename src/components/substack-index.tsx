import Link from "next/link";

const posts = [
  {
    title: "Future Food #5: Climbing the energy price ladder",
    url: "https://miloknowles.substack.com/p/future-food-6-climbing-the-energy",
    subtitle: "A handy chart for figuring out if you can use X to make Y"
  },
  {
    title: "Future Food #4: Indoor agriculture",
    url: "https://miloknowles.substack.com/p/future-food-4-indoor-agriculture",
    subtitle: "Vertical farming is overhyped, but greenhouses will play a key role in climate adaptation and food security"
  },
  {
    title: "Idea Compass #5: Predictions",
    url: "https://miloknowles.substack.com/p/idea-compass-5-predictions",
    subtitle: "Carbon dioxide removal, decarbonizing transportation, and alternative proteins"
  },
  {
    title: "Idea Compass #4: Loonshots",
    url: "https://substack.com/home/post/p-154489759",
    subtitle: "Grand visions that failed to materialize"
  },
  {
    title: "Idea Compass #3: Faster Horses",
    url: "https://substack.com/home/post/p-154668884",
    subtitle: "Netflix, BlackBerry, industrial carbon capture, and my own failed startups"
  },
  {
    title: "Idea Compass #2: Gimmicks",
    url: "https://substack.com/home/post/p-154667934",
    subtitle: "Don't be the next Juicero"
  },
  {
    title: "Idea Compass #1: Overview",
    url: "https://substack.com/home/post/p-154664312",
    subtitle: "More resources can be mobilized behind bad ideas than ever before"
  },
  {
    title: "Aerodynamic driving could reduce US emissions by 1%",
    url: "/blog/post/aerodynamic-driving",
    subtitle: "A (mostly) unserious climate solution",
  },
  {
    title: "Future Food #3: The unreasonable effectiveness of plants",
    url: "https://substack.com/home/post/p-154109789",
    subtitle: "Despite their inefficiency, plants will remain the foundation of our food supply"
  },
  {
    title: "Future Food #2: Artificial photosynthesis",
    url: "https://substack.com/home/post/p-154003101",
    subtitle: "The benefits and possible foundations of a synthetic food supply"
  },
  {
    title: "Future Food #1: Trophic levels",
    url: "https://substack.com/home/post/p-153963421",
    subtitle: "Food is ultra-processed sunlight",
  },
  {
    title: "How should companies and individuals fund climate action?",
    url: "https://substack.com/home/post/p-153947907",
    subtitle: "If you had $2 billion to spend on solving climate change, what would you do?"
  },
  {
    title: "What is consumed carbon intensity, and why is it important?",
    url: "https://medium.com/singularity-energy/what-is-consumed-carbon-intensity-and-why-is-it-important-3e272ee3e08c",
    subtitle: "A blog post from my time at Singularity Energy"
  },
  {
    title: "Blue Meadow: What I learned from a year as a solo founder",
    url: "/blog/post/blue-meadow",
    subtitle: "Here are some of the lessons I’ve learned, most of them the hard way."
  },
  {
    title: "Paper: Toward Robust and Efficient Online Adaptation for Deep Stereo Depth Estimation (ICRA 2021)",
    url: "/knowles_icra_2021.pdf",
    subtitle: "My first (and so far only) conference paper"
  },
  {
    title: "Thesis: Toward robust deep stereo networks: uncertainty learning, novelty detection, and online adaptation",
    url: "https://dspace.mit.edu/handle/1721.1/129167",
    subtitle: "My masters thesis at MIT"
  }
]

export default function SubstackIndex() {
  return (
    <div className="flex flex-col gap-4 text-md">
      {
        posts.map((post, index) => (
          <Link key={index} href={post.url} target="_blank">
            <div className="flex flex-col gap-1">
            <span className="text-indigo-500 dark:text-indigo-400 hover:underline">
              {post.title}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {post.subtitle}
            </span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}