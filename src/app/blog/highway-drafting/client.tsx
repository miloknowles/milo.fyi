import { Container, Section } from "@radix-ui/themes";

import Header from "@/components/Blog/Header";
import Feedback from "@/components/Blog/Feedback";

const Content = () => (
<div className="flex flex-col flex-grow gap-4 relative text-lg pb-8">
<p><strong>Note</strong>: this is not a serious idea that I believe is
feasible or worth pursuing. It’s just an exercise in curiosity and
back-of-the-napkin math.</p>{" "}
<p>Recently, I drove to Yosemite in a Sprinter van outfitted with beds,
a kitchen, a shower, and all the other glamping amenities. It’s tall and
has a lot of surface area, so you can really feel it being pushed by a
strong gust of wind or another car zooming past in the opposite
direction.</p>{" "}
<p>As someone who obsesses over <a href="https://triathlon-tools.vercel.app/tools/bike-simulator"><u>drag
coefficients</u></a> while cycling, I started wondering about the
potential efficiency gains from driving closely behind another car. On a
bike, drafting behind someone is significantly easier, since most of
your energy is lost to aerodynamic drag. For example, the power output
of a rider in the pro peloton can be as much as <a href="https://annex.exploratorium.edu/cycling/aerodynamics2.html#:~:text=In%20road%20racing%2C%20bicyclists%20group,not%20drafting%20with%20the%20group."><u>40%
lower</u></a> as someone riding out in front of the group. Is the same
true for driving? And if so, how much could <em>drafting</em> reduce the
carbon intensity of driving?</p>{" "}
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="autonomous-cars-could-enable-safe-aerodynamic-drafting-on-the-highway">Autonomous
cars could enable safe aerodynamic drafting on the highway</h3>{" "}
<p>Extremely close follow-distances (and other <a href="https://www.vox.com/2016/3/29/11324690/self-driving-cars-intersections"><u>crazy</u></a>{" "}
traffic maneuvers) could be possible on a road with mostly self-driving
cars. Whereas human reaction time is on the order of ~250 ms, autonomous
vehicles operated by a computer should be able to react to events within
tens of ms<a className="footnote-ref" href="#fn1" id="fnref1" role="doc-noteref"><sup>1</sup></a>. At 80 mph (35.7 m/s), a 3m follow
distance gives 84 ms of reaction time – an interval that’s too short for
human reflexes to kick in, but long enough for a computer to sense,
plan, and actuate a change in its driving. Furthermore, self-driving
cars can broadcast their anticipated plans to nearby vehicles, reducing
the number of sudden changes to react to.</p>{" "}
<p>Altogether, I think it’s very feasible for a group of autonomous cars
to safely drive in a convoy, spaced a few meters apart to minimize
aerodynamic drag.</p>{" "}
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="how-much-could-drafting-improve-fuel-economy">How much could
drafting improve fuel economy?</h3>{" "}
<p>Based on some sparse research (two papers and an episode of
Mythbusters), it appears that fuel economy can be improved on the order
of ~30-40% at highway speeds and an optimal follow-distance of about ~3
meters. There are probably a hundred caveats to consider based on
vehicle types, the speed you’re driving at, wind, etc, but I’m just
interested in a ballpark estimate. For my <a href="https://docs.google.com/spreadsheets/d/1h4zbnR3LVJKkgjTBlCDGao-bju3XVBd2lSL7-Iv3gQ0/edit?usp=sharing"><u>analysis</u></a>,
I assume a 20-40% improvement in fuel economy (liters of gasoline per
km) is possible. 20% is my pessimistic estimate, 30% is average, and 40%
is optimistic. I assume that the car in the front of a convoy still
experiences 100% drag, but the cars behind benefit from the fuel economy
improvement. This means that the average fuel economy is better for
longer convoys of cars, but with diminishing returns.</p>{" "}
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="the-math">The math</h3>{" "}
<p>My rough calculations can be found <a href="https://docs.google.com/spreadsheets/d/1h4zbnR3LVJKkgjTBlCDGao-bju3XVBd2lSL7-Iv3gQ0/edit?usp=sharing"><u>here</u></a>.
Some important assumptions are: 26% of vehicle miles are driven on the
highway in the US, 80% of a vehicle’s time on the highway could be spent
in an “aero” formation, and cars travel in groups of five (an arbitrary
choice, but larger groups have diminishing aerodynamic returns). In
groups of five, the convoy uses 68-84% of the fuel they would if driving
individually.</p>{" "}
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="the-results">The results</h3>{" "}
<p><strong>With the assumptions above, <em>autonomous drafting</em>{" "}
could be implemented for 663 billion vehicle miles in the US, and avoid
49-98 million metric tons of CO2-eq per year. This is 2.7-5.4% of US
transportation emissions and 0.8-1.5% of total US
emissions.</strong></p>{" "}
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="conclusion">Conclusion</h3>{" "}
<p>A ~1% reduction in US emissions is meaningful, but ranks low on the
list of benefits from autonomous vehicles in my view, such as improved
safety and <a href="https://www.washingtonpost.com/opinions/interactive/2021/commute-calculator-pandemic/"><u>years</u></a>{" "}
of life not spent commuting. Also, my hypothetical scenario depends on
100% adoption of AVs, which is a big “if”.</p>{" "}
<p>Finally, by grouping autonomous cars within 3 meters of each other on
the highway, we’ve basically… overengineered a train with more steps and
expensive sensors. So there’s nothing new to see here – to decarbonize
transportation, we just need to do the boring work of building useful
public transit and electrifying it.</p>{" "}
<section className="footnotes footnotes-end-of-document pt-8 text-sm" id="footnotes" role="doc-endnotes">{" "}
<div className="pb-8">{" "}
<hr/>{" "}
</div>{" "}
<ol className="list-decimal pl-4 flex flex-col gap-3">{" "}
<li><div className="pl-2" id="fn1">{" "}
<p>The reaction time of an AV depends on the rate at which relevant
sensor data is sampled. For example, a front-facing radar running at 100
Hz should be able to detect a deceleration in the car ahead on the order
of 10 ms, a camera with a framerate of 30 Hz only captures data every
33.3 ms, and so on.<a className="footnote-back" href="#fnref1" role="doc-backlink">↩︎</a></p>{" "}
</div></li>{" "}
</ol>{" "}
</section>{" "}
</div>
)


export default function Page() {
  return (
    <Section
      size={{initial: "1", md: "3"}}
      pl={{initial: "3"}}
      pr={{initial: "3"}}
      id="blog-wrapper"
    >
      <Container size="3">
        <Header
          title="Aerodynamic driving could reduce US emissions by 1%"
          publishDate="Nov 2, 2024"
          sidenoteWarning
        />
        <Content/>
        <Feedback/>
      </Container>
    </Section>
  );
}