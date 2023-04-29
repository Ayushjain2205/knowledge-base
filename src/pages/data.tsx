import Layout from "@/components/Layout";
import React from "react";
import { DropzoneButton } from "@/components/DropZoneButton";
import { FloatingLabelInput } from "@/components/FloatingLabel";
import Link from "next/link";

const data = () => {
  return (
    <Layout>
      <h1 className="text-l mb-2">Upload Files:</h1>
      <DropzoneButton />
      <br />
      <FloatingLabelInput
        label="Link"
        placeholder="Add Link of the website you want to scrape"
      />
      <Link href="/chat">
        <button className="btn btn-primary btn-block mt-32">Ingest Data</button>
      </Link>
    </Layout>
  );
};

export default data;
