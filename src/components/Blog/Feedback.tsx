import { CalloutRoot, CalloutText } from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes";

export default function Feedback() {
  return (
    <CalloutRoot>
      <CalloutText>
        If you have questions or feedback, feel free to <RadixLink href="mailto:miloknowles97@gmail.com">reach out</RadixLink>.
      </CalloutText>
    </CalloutRoot>
  )
}