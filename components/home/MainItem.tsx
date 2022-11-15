import Link from "next/link";
import React from "react";
import Animation from "./Animation";

const MainItem = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 md:pl-24 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          HI, I AM GIA
        </h1>
        <p className="mb-8 leading-relaxed">
          A Front-end Developer
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default MainItem;
