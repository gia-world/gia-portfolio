import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font md:px-24">
        <div className="container py-4 mx-auto flex items-center justify-center gap-2">
            <Link
              href="/"
              className="font-medium"
            >
             코딩하지아
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
