"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Container, Flex, IconButton, Section } from "@radix-ui/themes";

import Link from "next/link";
import { useState } from "react";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaStrava } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ThemeToggle from "../theme-toggle";
import { config } from "@/lib/config";

const BigLink = (props: {
  href: string;
  target?: string;
  children: any;
  onClick?: () => void;
}) => {
  return (
    <Link href={props.href} onClick={props.onClick} target={props.target}>
      <h2
        className="
          relative text-5xl font-semibold tracking-tighter
          after:bg-current after:absolute after:h-[3px] after:w-0 after:-bottom-2 after:left-0
          hover:after:w-full after:transition-all after:duration-200
          cursor-pointer w-min
        "
      >
        {props.children}
      </h2>
    </Link>
  );
};

function LinkIcon(props: { href: string; children: any }) {
  return (
    <Link href={props.href} target="_blank">
      <IconButton variant="ghost">{props.children}</IconButton>
    </Link>
  );
}

function Socials(props: { size: number; color?: string }) {
  return (
    <Flex gap="6">
      <LinkIcon href={config.LINKEDIN_URL}>
        <LinkedInLogoIcon
          width={props.size.toString()}
          height={props.size.toString()}
          className="text-black dark:text-gray-50"
        />
      </LinkIcon>
      <LinkIcon href={config.GITHUB_URL}>
        <GitHubLogoIcon
          width={props.size.toString()}
          height={props.size.toString()}
          className="text-black dark:text-gray-50"
        />
      </LinkIcon>
      <LinkIcon href={config.STRAVA_URL}>
        <FaStrava size={props.size} className="text-black dark:text-gray-50" />
      </LinkIcon>
      <LinkIcon href={config.EMAIL_URL}>
        <FaEnvelope
          size={props.size}
          className="text-black dark:text-gray-50"
        />
      </LinkIcon>
    </Flex>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const onClickLink = () => {
    setOpen(false);
  };

  return (
    <header className="z-[2000] fixed right-0 top-0 w-full">
      <nav className="p-4 flex gap-4 w-full items-center justify-end">
        <ThemeToggle />
        <IconButton
          size="3"
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="z-[5000] relative"
        >
          {open ? (
            <Cross1Icon width="16" height="16" />
          ) : (
            <HamburgerMenuIcon width="16" height="16" />
          )}
        </IconButton>
      </nav>
      <Section
        className="h-screen w-screen bg-white dark:bg-black fixed top-0 right-0 z-[4000]"
        style={{
          opacity: open ? 1 : 0,
          transition: "opacity 0.25s ease",
          pointerEvents: open ? "all" : "none",
          zIndex: 4000,
        }}
      >
        <nav style={{ display: open ? "flex" : "none" }} className="h-full flex items-center justify-center">
          <Container size="1" p={{ initial: "4", md: "0" }} className="">
            <Flex direction="column" gap="8" className="">
              <BigLink href="/" onClick={onClickLink}>
                About
              </BigLink>
              <BigLink href="/blog" onClick={onClickLink}>
                Writing
              </BigLink>
              <BigLink
                href={config.RESUME_URL}
                onClick={onClickLink}
                target={"_blank"}
              >
                Resume
              </BigLink>
            </Flex>
          </Container>
        </nav>
      </Section>
    </header>
  );
}
