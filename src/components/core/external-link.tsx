import { cn } from "@/lib/utils";
import { Link as _Link } from "@radix-ui/themes";

const ExternalLink = (props: { href: string, children: any, className?: string }) => (
  <_Link href={props.href} target="_blank" className={cn("", props.className)}>
    {props.children}
  </_Link>
);

export default ExternalLink;