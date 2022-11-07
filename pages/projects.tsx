import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>코딩하지아</title>
        <meta name="description" content="코딩하지아" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Projects</h1>
    </Layout>
  );
};

export default Projects;

// getStaticProps 빌드타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const notionData = await res.json();

  console.log(notionData);
  // console.log(TOKEN);

  return {
    props: {}, // will be passed to the page component as props
  };
}
