import { useTranslation } from "next-i18next";
import Image from "next/image";

const MainItem = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="relative w-[40vw] h-[40vw] md:w-[50vh] md:h-[70vh]">
        <Image
          src="/images/profile.jpg"
          alt="profile pic"
          fill
          className="object-cover rounded-full md:rounded-xl"
        />
      </div>
      <div className="max-w-[500px] flex flex-col gap-4 items-center md:items-start">
        <h2 className="title-font sm:text-4xl text-3xl mb-2 text-gray-900 font-semibold">
          Gia Jihye Jun
        </h2>
        <h3 className="text-xl">✨ {t("profile.subtit")}</h3>
        <ul className="list-disc ml-4 whitespace-pre">
          <li className=" text-slate-500 dark:text-slate-400">
            {t("profile.li1")}
          </li>
          <li className=" text-slate-500 dark:text-slate-400">
            {t("profile.li2")}
          </li>
          <li className=" text-slate-500 dark:text-slate-400">
            {t("profile.li3")}
          </li>
          <li className=" text-slate-500 dark:text-slate-400">
            {t("profile.li4")}
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <a
            href="mailto:gia.jihye.j@gmail.com"
            className="flex gap-2 items-center hover:scale-110 transition-transform duration-500 hover:text-indigo-500 hover:fill-indigo-500 dark:fill-white dark:hover:fill-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"></path>
            </svg>
            <p>Mail</p>
          </a>
          <a
            href="https://github.com/gia-world"
            className="flex gap-2 items-center transition-transform duration-500 hover:scale-110 hover:text-indigo-500 hover:fill-indigo-500 dark:fill-white dark:hover:fill-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            <p>GitHub</p>
          </a>
        </div>
        <a
          href="https://www.notion.so/Gia-Jihye-Jun-the-UI-developer-31cceb5eb0a348258000598f05fc1bd7"
          target="_blank"
          className="btn-project mt-4"
          rel="noreferrer"
        >
          {t("cv")}
        </a>
      </div>
    </>
  );
};

export default MainItem;
