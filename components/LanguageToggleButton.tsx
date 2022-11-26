import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LanguageToggleButton = () => {
  const router = useRouter();
  return (
    <>
      {/* <Link href="/" locale="en">
        English
      </Link>
      <Link href="/" locale="ko">
        한국어
      </Link> */}
      <ul>
        {router.locales?.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              {/* asPath : refers to current page/path in your browser */}
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LanguageToggleButton;
