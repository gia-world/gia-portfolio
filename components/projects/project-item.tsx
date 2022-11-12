import Image from "next/image";
import React from "react";
import { Result } from "../../pages/projects";

interface Props {
  data: Result;
}

interface Img extends React.ImgHTMLAttributes<HTMLImageElement> {
  width: string;
  height: string;
  layout: string;
  objectFit: string;
}

const ProjectItem = ({ data }: Props) => {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const deployLink = data.properties.Deployment.url;
  const desc = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start: string, end: string) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]),
      Number(startDateStringArray[2])
    );
    var endDate = new Date(
      Number(endDateStringArray[0]),
      Number(endDateStringArray[1]),
      Number(endDateStringArray[2])
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(Number(endDate) - Number(startDate));
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl w-full"
        src={imgSrc}
        alt={title}
        width="100"
        height="60"
        // layout="responsive"
        // objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="mt-4 text-xl">{desc}</h3>
        <a href={githubLink}>깃허브 바로가기</a>
        <a href={deployLink}>배포 페이지 바로가기</a>
        <p className="my-1">
          작업기간 : {start} ~ {end} 총 {calculatedPeriod(start, end)}일
        </p>
        <div className="flex items-start mt-2">
          {tags.map((it) => (
            <h4
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={it.id}
            >
              {it.name}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
