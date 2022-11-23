import Link from "next/link";
import React from "react";
import Animation from "./Animation";

const MainItem = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 md:pl-24 items-center text-center">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          HI, I AM GIA
        </h2>
        <h3 className="mb-8 leading-relaxed">
          A Front-end Developer
        </h3>
        <div className="flex justify-center">
          {/* <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link> */}
          <a href="https://www.notion.so/Gia-Jihye-Jun-the-UI-developer-31cceb5eb0a348258000598f05fc1bd7" target="_blank" className="btn-project">이력서 확인하기</a>
        </div>
      </div>
      <div className="lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default MainItem;
