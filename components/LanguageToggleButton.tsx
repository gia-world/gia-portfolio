import Link from "next/link";
import React from "react";

const LanguageToggleButton = () => {
  return (
    <>
      <Link href="/" locale="en">
        English
      </Link>
      <Link href="/" locale="ko">
        한국어
      </Link>
    </>
  );
};

export default LanguageToggleButton;
