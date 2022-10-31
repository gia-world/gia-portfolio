import Head from "next/head";
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
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요 지아입니다.
              <br className="hidden lg:inline-block" />
              오늘도 빡코딩
            </h1>
            <p className="mb-8 leading-relaxed">
              봄바람을 뜨거운지라, 그들의 가치를 있으며, 고동을 모래뿐일 구하지
              부패뿐이다. 별과 방황하였으며, 청춘의 황금시대다. 싶이 사랑의
              그러므로 것이다. 일월과 싶이 인도하겠다는 청춘은 오직 듣는다.
              영락과 작고 싸인 그들에게 피에 뿐이다. 사라지지 오직 따뜻한
              있으며, 그들은 공자는 원질이 못하다 그리하였는가? 안고, 끓는
              인생을 청춘은 끝까지 부패를 귀는 이상은 설산에서 철환하였는가?
              있는 이상은 굳세게 있는 청춘의 피가 실로 말이다. 기쁘며, 가치를
              바이며, 쓸쓸하랴? 피에 방황하여도, 따뜻한 산야에 주는 피가 갑
              얼음이 칼이다. 광야에서 만천하의 밥을 피가 방황하여도, 그들에게
              때문이다. 노래하며 주는 그들의 따뜻한 피어나는 역사를 그것은
              석가는 청춘이 황금시대다.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
    </Layout>
  );
}
