import { Metadata } from "next";

import Content from "./client";

export const metadata: Metadata = {
  title: 'Aerodynamic driving could reduce US emissions by 1%',
  description: "On a bike, drafting behind someone is significantly easier, since most of your energy is lost to aerodynamic drag. For example, the power output of a rider in the pro peloton can be as much as 40% lower as someone riding out in front of the group. Is the same true for driving? And if so, how much could drafting reduce the carbon intensity of driving?",
}

export default function Page() {
  return (
    <Content/>
  )
}