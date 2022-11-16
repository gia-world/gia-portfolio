import React from "react";

const Skills = () => {
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
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Mark-up & styling</p>
            <p className="text-grey pt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/media-queries.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">Responsive web</p>
            <p className="text-grey pt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/collaboration.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Co-work</p>
            <p className="text-grey pt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/saving-book.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Self-study</p>
            <p className="text-grey pt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
            <p className="text-grey pt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </li>
        <li className="skill-card">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <img src="https://img.icons8.com/plasticine/100/null/language.png" />
          </div>
          <div className="text-center">
            <p className="pt-8 text-lg font-semibold uppercase text-primary lg:text-xl">Language</p>
            <p className="text-grey pt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
