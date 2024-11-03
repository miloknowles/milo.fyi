import { Metadata } from "next";

import Header from "@/components/blog/Header";

// import Body from "./body";
import { date, title, description } from "./metadata";

export const metadata: Metadata = { title, description }

export default function Page() {
  return (
    <>
      <Header
        title={title}
        publishDate={date}
        sidenoteWarning
      />
      {/* <Body/> */}
    </>
  )
}