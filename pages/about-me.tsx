import Head from "next/head";
import React from "react";
import Intro from "../components/about-me/Intro";
import Skills from "../components/about-me/Skills";
import Layout from "../components/Layout";

const AboutMe = () => {
  return (
    <Layout>
      <Head>
        <title>코딩하지아 - 소개</title>
      </Head>
      <div>
        <Intro/>
        <Skills/>
      </div>
    </Layout>
  );
};

export default AboutMe;
