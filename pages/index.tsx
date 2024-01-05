import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import MainItem from "../components/home/MainItem";
import Layout from "../components/Layout";

export default function Home() {
  const { t } = useTranslation("common");
  // const router = useRouter();
  // const { locale } = router;

  return (
    <Layout>
      <Head>
        <title>{t("logo")}</title>
      </Head>
      <div className="flex min-h-[70vh] md:min-h-[80vh] flex-col items-center justify-center text-gray-600 body-font">
        {/* <h2>{locale}</h2> */}
        <h2 className="hidden">메인페이지</h2>
        <div className="container mx-auto flex md:flex-row flex-col items-center gap-12 justify-center p-10">
          <MainItem />
        </div>
      </div>
    </Layout>
  );
}

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ["common", "about"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
// Error: Initial locale argument was not passed into serverSideTranslations

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", "about"])),
  },
});
