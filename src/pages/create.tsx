import React from "react";
import Layout from "@/components/Layout";
import { ImageCheckboxes } from "@/components/ImageCheckboxes";
import { FloatingLabelInput } from "@/components/FloatingLabel";
import Link from "next/link";

const create = () => {
  return (
    <Layout>
      <h1 className="text-xl">Create Knowledge Base</h1>
      <br />
      <FloatingLabelInput
        label="Name"
        placeholder="What would you like to call your chatbot?"
      />
      <br />
      <FloatingLabelInput
        label="Description"
        placeholder="What does your chatbot do?"
      />
      <br />
      <br />
      <h1 className="text-l mb-2">Choose sources:</h1>
      <ImageCheckboxes />
      <Link href="data">
        <button className="btn btn-primary btn-block mt-32">Load Data</button>
      </Link>
    </Layout>
  );
};

export default create;
