import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { GetStaticPropsContext } from "next/types";
import React from "react";
import Intro from "../components/about-me/Intro";
import Skills from "../components/about-me/Skills";
import Layout from "../components/Layout";

export default function AboutMe() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <Head>
        <title>{t('logo')} - {t('header.about')}</title>
      </Head>
      <div>
        <h2 className="hidden">자기소개</h2>
        <Intro />
        <Skills />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", "about"])),
  },
});
