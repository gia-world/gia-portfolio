import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config";

interface Props {
  notionData: {
    results: Result[];
  };
}
export interface Result {
  id: string;
  cover: {
    file?: {
      url: string;
    };
    external: {
      url: string;
    };
  };
  properties: {
    Name: {
      title: [
        {
          plain_text: string;
        }
      ];
    };
    Github: {
      url: string;
    };
    Deployment: {
      url: string;
    };
    Description: {
      rich_text: [
        {
          plain_text: string;
        }
      ];
    };
    Tags: {
      multi_select: [
        {
          id: string;
          name: string;
        }
      ];
    };
    WorkPeriod: {
      date: {
        start: string;
        end: string;
      };
    };
  };
}
const Projects = ({ notionData }: Props) => {
  // console.log(`(클라이언트사이드) ${projectNames}`);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>코딩하지아</title>
          <meta name="description" content="코딩하지아" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className="text-4xl font-bold">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">
            {notionData.results.length}
          </span>
        </h2>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 py-10 lg:px-40 gap-8 w-full">
          {notionData.results.map((it: any) => (
            <ProjectItem key={it.id} data={it} />
          ))}
        </div>
      </div>
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
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const notionData = await res.json();

  // console.log(notionData);

  // const projectNames = notionData.results.map(
  //   (it: Result) => it.properties.Name.title[0].plain_text
  // );

  // console.log(`(서버사이드)projectNames:${projectNames}`);

  return {
    props: { notionData }, // will be passed to the page component as props
  };
}
