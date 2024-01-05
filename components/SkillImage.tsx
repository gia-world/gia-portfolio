import Image from "next/image";

type Props = {
  url: string;
};

export default function SkillImage({ url }: Props) {
  return (
    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28 relative">
      <Image src={url} alt="skill set" fill />
    </div>
  );
}
