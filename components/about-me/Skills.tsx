import React from "react";
import { useTranslation } from "next-i18next";

const Skills = () => {
  const { t } = useTranslation("about");
  return (
    <section className="container mx-auto px-10 lg:px-20 py-16 md:py-20">
      <h3 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">Here's what I'm good at</h3>
      <p className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">These are my speciality than others</p>

      <ul className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/html.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Mark-up</p>
            <p className="text-grey pt-4 text-sm md:text-base whitespace-pre-line">
            {t('markup')}
            </p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/media-queries.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"> Styling & Responsive web</p>
            <p className="text-grey pt-4 text-sm md:text-base whitespace-pre-line">
            {t('css')}
            {/* t('test:test.line').split('/n').map(line => <p>{line}</p>) */}
            </p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/collaboration.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Co-work</p>
            <p className="text-grey pt-4 text-sm md:text-base whitespace-pre-line">
            {t('cowork')}
            </p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/saving-book.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Self-study</p>
            <p className="text-grey pt-4 text-sm md:text-base whitespace-pre-line">
            {t('self')}
            </p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div>
              <img src="https://img.icons8.com/plasticine/100/null/around-the-globe.png" />
            </div>
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Global experience</p>
            <p className="text-grey pt-4 text-sm md:text-base whitespace-pre-line">
            {t('global')}
            </p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/language.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Language</p>
            <p className="text-grey pt-4 text-sm md:text-base whitespace-pre-line">
            {t('lang')}
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
