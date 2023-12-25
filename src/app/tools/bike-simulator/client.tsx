"use client";

import { Button } from "@/components/ui/button";
import { CalloutRoot, CalloutText, Card, Code, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";

import { AreaChart, LineChart, Title } from "@tremor/react";

import useSWR from "swr"
import { useState } from "react";
import Toolbar from "./toolbar";
import { Results } from "./types";
import MetricCard from "./MetricCard";


const DataCard = (props: { title: string, value: string, units?: string }) => (
  <Card className="p-3 bg-transparent rounded-xl">
    <Flex direction="column" gap="0">
      <Text weight="medium" size="2">{props.title}</Text>
      <Heading size="7" color="indigo">{props.value}</Heading>
      <Text weight="light" size="1">{props.units}</Text>
    </Flex>
  </Card>
);


const metersPerSecToMph = 2.23694;
const metersPerSecToKmPerHr = 3.6;
const metersToFt = 3.28084;
const metersToMi = 0.621371 / 1000;


interface IResultsDisplayProps {
  units: "imperial" | "metric"
}


const ResultsDisplay = ({ units } : IResultsDisplayProps) => {
  // This will initially fetch nothing, but see data in the cache once it's fetched.
  const { data, error } = useSWR<Results>('/api/simulate');
  // const data: Results = demoData;

  if (!data) {
    return <></>;
  }

  // @ts-ignore
  if (data.detail) {
    return (<CalloutRoot color="red">
      {/* @ts-ignore */}
      <CalloutText>Error: {data.detail}</CalloutText>
    </CalloutRoot>)
  }

  const elapsed = data.states.at(-1)?.t || 0;
  const elapsedH = Math.floor(elapsed / 3600);
  const elapsedM = Math.floor((elapsed - elapsedH*3600) / 60);
  const elapsedS = Math.floor(elapsed % 60);

  const avgSpeed = data.avg_speed_m_per_s * (units === "metric" ? 3.6 : 2.23694);
  const totalGain = data.course_gain_m * (units === "metric" ? 1 : 3.28084);
  // const totalDist = data.course_distance_m / 1000 * 0.621371;

  const predFinish = `${elapsedH.toLocaleString("default", { minimumIntegerDigits: 2 })}:${elapsedM.toLocaleString("default", { minimumIntegerDigits: 2 })}:${elapsedS.toLocaleString("default", { minimumIntegerDigits: 2 })}`;

  // Convert units as needed.
  const chartData = data.states.map(v => ({
    t: new Date(v.t * 1000).toISOString().slice(11, 19),
    x: units === "imperial" ? (v.x * metersToMi) : v.x / 1000,
    v: units === "imperial" ? (v.v * metersPerSecToMph) : v.v * metersPerSecToKmPerHr,
    alt: units === "imperial" ? v.alt * metersToFt : v.alt,
    P_drag: v.v * v.F_drag,
    P_roll: v.v * v.F_roll,
    P_grav: v.v * v.F_grav,
  }));
  
  const avgDragLosses = chartData.map(v => v.P_drag).reduce((a, b) => a + b) / chartData.length;
  const avgRollLosses = chartData.map(v => v.P_roll).reduce((a, b) => a + b) / chartData.length;
  const avgGravLosses = chartData.map(v => v.P_grav).reduce((a, b) => a + b) / chartData.length;

  return (
    <Flex direction="column" align="start" className="w-full" gap="6">
      <Flex direction="column" className="w-full">
        <Flex className="w-full">
          <Heading size="7">Results</Heading>
          <Button className="ml-auto">Download raw data</Button>
        </Flex>
        <Text size="1" className="text-muted-foreground">
          Simulated <Code>{data.meta.compute_iters || "N/A"}</Code> timesteps
          in <Code>{data.meta.compute_sec.toLocaleString("default", {maximumFractionDigits: 2}) || "N/A"} seconds</Code>
        </Text>
      </Flex>

      <Grid gap="6" columns={{initial: "1", sm: "3", md: "5"}}>
        <MetricCard title="Predicted finish" value={predFinish} units="elapsed"/>
        <MetricCard title="Average speed" value={avgSpeed.toLocaleString("default", { maximumFractionDigits: 1 })} units={units === "metric" ? "km/hr" : "mph"}/>
        <MetricCard title="Total elevation gain" value={totalGain.toLocaleString("default", { maximumFractionDigits: 0 })} units={units === "metric" ? "m" : "ft"}/>
        <MetricCard title="Average drag losses" value={avgDragLosses.toLocaleString("default", { maximumFractionDigits: 1 })} units="watts"/>
        <MetricCard title="Average rolling losses" value={avgRollLosses.toLocaleString("default", { maximumFractionDigits: 1 })} units="watts"/>
        {/* <MetricCard title="Average gravity losses" value={avgGravLosses.toLocaleString("default", { maximumFractionDigits: 1 })} units="watts"/> */}
      </Grid>

      <Card className="w-full">
        <Title className="pl-2">Elevation</Title>
        <AreaChart
          className="h-48 mb-2"
          data={chartData}
          index="t"
          categories={["alt"]}
          colors={["gray"]}
          yAxisWidth={60}
          connectNulls={true}
          autoMinValue={true}
          showLegend={true}
          // showAnimation={true}
          valueFormatter={(v) => v.toLocaleString("default", { maximumFractionDigits: 0 }) + (units === "metric" ? " m" : " ft")}
        />

        <Title className="pl-2">Velocity</Title>
        <LineChart
          className="h-48 mb-2"
          data={chartData}
          index="t"
          categories={["v"]}
          colors={["indigo"]}
          yAxisWidth={60}
          connectNulls={true}
          autoMinValue={true}
          showLegend={true}
          // showAnimation={true}
          valueFormatter={(v) => v.toLocaleString("default", { maximumFractionDigits: 1 }) + (units === "metric" ? " km/h" : " mph")}
        />

        <Title className="pl-2">Power losses</Title>
        <LineChart
          className="h-48 mb-2"
          data={chartData}
          index="t"
          categories={["P_drag", "P_roll", "P_grav"]}
          colors={["blue", "red", "amber"]}
          yAxisWidth={60}
          connectNulls={true}
          autoMinValue={true}
          showLegend={true}
          valueFormatter={(v) => v.toLocaleString("default", { maximumFractionDigits: 1 }) + " W"}
          // showAnimation={true}
        />
      </Card>
    </Flex>
  )
}


export default function Tool() {
  const [units, setUnits] = useState<"imperial" | "metric">("metric");

  return (
    <main className="min-h-screen px-6 py-5 gap-8 flex flex-col">
      <Toolbar units={units} setUnits={setUnits}/>
      <Separator size="4"/>
      <ResultsDisplay units={units}/>
    </main>
  );
}