import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <header className="text-gray-600 body-font md:px-24">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-4 md:gap-8">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <Image src="/images/logo.png" alt="logo" width={24} height={24} />
            <h1 className="ml-2 text-xl">{t("logo")}</h1>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 md:gap-8">
            <Link href="/" className="hover:text-gray-900">
              {t("header.home")}
            </Link>
            {/* <Link href="/about-me" className="hover:text-gray-900">
              {t("header.about")}
            </Link> */}
            <Link href="/projects" className="hover:text-gray-900">
              {t("header.project")}
            </Link>
            <Link
              href="https://aboveimagine.tistory.com/"
              className="hover:text-gray-900"
              target="_blank"
            >
              {t("header.blog")}
            </Link>
          </nav>
          <div className="flex gap-4">
            <DarkModeToggleButton />
            <LanguageToggleButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
