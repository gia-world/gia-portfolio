import { Result } from "../../pages/projects";

interface Props {
  data: Result;
}

const ProjectItem = ({ data }: Props) => {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const deployLink = data.properties.Deployment.url;
  const desc = data.properties.Description.rich_text[0]?.plain_text || null;
  // const imgSrc = data.cover.file&&data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const pageLink = data.url;

  const calculatedPeriod = (start: string, end: string) => {
    if (end) {
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

      const diffInMs = Math.abs(Number(endDate) - Number(startDate));
      const result = diffInMs / (1000 * 60 * 60 * 24);

      return result;
    }
  };

  return (
    <div
      className="project-card"
      // title="사진을 클릭하면 프로젝트 페이지로 이동합니다."
    >
      {/* <a href={pageLink} target="_blank" rel="noreferrer">
        <div className="relative w-[100%] pt-[56.25%]">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={title}
            fill={true}
          />
        </div>
      </a> */}
      <div className="p-6 flex flex-col content-around h-[100%]">
        <a href={pageLink} target="_blank" rel="noreferrer">
          <h3 className="text-2xl font-bold">{title}</h3>
        </a>
        <h4 className="my-4 text-xl grow ellipsis">{desc}</h4>
        <div>
          {githubLink ? (
            <>
              <a href={githubLink} target="_blank" rel="noreferrer">
                깃허브 바로가기
              </a>
              <br />
            </>
          ) : (
            ""
          )}
          {deployLink ? (
            <a href={deployLink} target="_blank" rel="noreferrer">
              배포 페이지 바로가기
            </a>
          ) : (
            ""
          )}
        </div>
        <p className="my-2">
          작업기간{` : `}
          {end ? (
            <span>
              총 {calculatedPeriod(start, end)}일{" "}
              <small>
                ({start} ~ {end})
              </small>
            </span>
          ) : (
            <span>
              작업중 <small>({start} ~ )</small>
            </span>
          )}
        </p>
        <div className="flex flex-wrap gap-2 items-start mt-2 basis-16">
          {tags.map((it) => (
            <p
              className="px-2 py-1 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-sm text-slate-900 dark:text-white"
              key={it.id}
            >
              {it.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
