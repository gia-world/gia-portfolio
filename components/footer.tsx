import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <footer className="text-gray-600 body-font md:px-24">
        <div className="container py-4 mx-auto flex items-center justify-center gap-2">
            <Link
              href="/"
              className="font-medium"
            >
             {t('logo')}
            </Link>
            <p className="text-sm text-gray-500">
              © 2022 Giagraphy
            </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
