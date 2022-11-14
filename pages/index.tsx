import Head from "next/head";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>코딩하지아</title>
        <meta name="description" content="코딩하지아" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
