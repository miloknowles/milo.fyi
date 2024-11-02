"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading } from "@radix-ui/themes";
import { useState } from "react";
import Layout from "../blog/post/layout";
import Header from "@/components/blog/Header";

export default function Page() {
  const [docUrl, setDocUrl] = useState<string | null>(null);

  const onSubmit = async () => {
    if (!docUrl) return;

    const res = await fetch("/api/convert-doc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ docUrl }),
    });

    const data = await res.json();
    console.log(data);
  }

  // Callback for file upload
  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // get the file 
    const file = e.target.files?.[0];
    if (!file) return;

    // read the file
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      console.log(text);
    }
  }

  const datestring = "Jan 1, 2024"

  return (
    <div className="flex flex-col p-6">
      <Heading size="6">Google Docs Converter</Heading>

      <p className="mt-4">
        Convert a Google Docs URL to a Radix UI themed blog post.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <Input
            placeholder="Paste a Google Docs URL here"
            className="mt-4 font-mono"
            value={docUrl || ""}
            onChange={(e) => setDocUrl(e.target.value)}
          />
          <Input
            type="file"
            className="mt-4"
            onChange={onFileUpload}
          />
          <Button className="mt-4" disabled={!docUrl} onClick={onSubmit}>
            Convert
          </Button>

          <code className="mt-4">
            {docUrl}
          </code>
        </div>

        <div className="col-span-1">
          <Layout>
            <Header
              title={"Untitled post"}
              publishDate={datestring}
              sidenoteWarning
            />
            {/* <Body/> */}
          </Layout>
        </div>
      </div>
      
    </div>
  )
}