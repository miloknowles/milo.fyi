import { cn } from "@/lib/utils";

const ExternalLink = (props: {
  href: string;
  children: any;
  className?: string;
}) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("text-primary underline underline-offset-2 decoration-[0.1em] hover:opacity-80 transition-opacity", props.className)}
  >
    {props.children}
  </a>
);

export default ExternalLink;
