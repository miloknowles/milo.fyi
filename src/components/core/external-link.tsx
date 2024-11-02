import { Link as _Link } from "@radix-ui/themes";

const ExternalLink = (props: { href: string, children: any }) => (
  <_Link href={props.href} target="_blank">
    {props.children}
  </_Link>
);

export default ExternalLink;