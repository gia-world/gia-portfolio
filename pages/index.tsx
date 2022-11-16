import Head from "next/head";
import MainItem from "../components/home/MainItem";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>코딩하지아</title>
      </Head>
      <div className="flex min-h-[70vh] md:min-h-[80vh] flex-col items-center justify-center text-gray-600 body-font">
        <h2 className="hidden">메인페이지</h2>
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <MainItem />
        </div>
      </div>
    </Layout>
  );
}
