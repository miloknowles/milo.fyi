"use client";

import Feedback from "@/components/blog/Feedback";
import { Container, Section } from "@radix-ui/themes";
import MathJax from "react-mathjax";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Section
      size={{initial: "1", md: "3"}}
      pl={{initial: "3"}}
      pr={{initial: "3"}}
      id="blog-wrapper"
    >
      <Container size="3">
        <MathJax.Provider options={
          {
            asciimath2jax: {
              delimiters: [['$$', '$$']],
              inlineMath: [['$[', ']$']]
            },
            tex2jax: {
              delimiters: [['$$', '$$']],
              inlineMath: [['$[', ']$']]
            },
            mathml2jax: {
              delimiters: [['$$', '$$']],
              inlineMath: [['$[', ']$']]
            }
          }
        }>
          {children}
        </MathJax.Provider>
        <Feedback/>
      </Container>
    </Section>
  );
}