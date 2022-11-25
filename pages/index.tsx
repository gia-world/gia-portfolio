import Head from "next/head";
import MainItem from "../components/home/MainItem";
import Layout from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>코딩하지아</title>
      </Head>
      <div className="flex min-h-[70vh] md:min-h-[80vh] flex-col items-center justify-center text-gray-600 body-font">
        <h2>{t("tit")}</h2>
        {/* <h2 className="hidden">메인페이지</h2> */}
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <h3>{t("hi")}</h3>
          <MainItem />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale ='en' }:any) => {
  console.log("locale of getStaticProps", locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
