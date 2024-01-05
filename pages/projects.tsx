import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { GetStaticPropsContext } from "next/types";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Layout from "../components/Layout";
import ProjectItem from "../components/projects/ProjectItem";

interface NotionData {
  results: Result[];
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
  url: string;
}
const Projects = () => {
  const { t } = useTranslation();
  const [notionData, setNotionData] = useState<NotionData>();

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const res = await fetch("/api/notion");
        const data = await res.json();
        setNotionData(data.notionData);
      } catch (error) {
        console.error("Error fetching Notion data:", error);
      }
    };

    fetchNotionData();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{`${t("common:logo")} - ${t("common:header.project")}`}</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[600px] my-4 md:my-10 px-6">
        {notionData ? (
          <>
            <h2 className="text-4xl font-bold">
              {t("projects:total")}
              <span className="pl-4 text-blue-500">
                {notionData.results?.length}
              </span>
            </h2>
            <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-3 py-10 lg:px-40 gap-8 w-full">
              {notionData.results?.map((it: any) => (
                <ProjectItem key={it.id} data={it} />
              ))}
            </div>
          </>
        ) : (
          <BeatLoader color="#6366F1" />
        )}
      </div>
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", "projects"])),
  },
});
