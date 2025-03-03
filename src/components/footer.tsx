import { config } from "@/lib/config";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const items = [
  {
    href: config.SUBSTACK_URL,
    label: "substack",
  },
  {
    href: config.GITHUB_URL,
    label: "github",
  },
  {
    href: config.RESUME_URL,
    label: "resume",
  },
  {
    href: config.LINKEDIN_URL,
    label: "linkedin",
  },
  {
    href: config.STRAVA_URL,
    label: "strava",
  },
  {
    href: config.EMAIL_URL,
    label: "email",
  },
];

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul
        className="
        font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-400 md:flex-row md:space-x-4 md:space-y-0
      "
      >
        {items.map((item) => (
          <li key={item.href}>
            <a
              className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-300"
              rel="noopener noreferrer"
              target="_blank"
              href={item.href}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{item.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
