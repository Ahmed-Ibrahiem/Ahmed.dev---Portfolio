import { Skill } from "@/types";

const ResumeCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="w-full h-full bg-card-style shadow-box rounded-sm flex-start-col gap-5 p-6">
      <h2 className="text-2xl font-semibold">{skill.label}</h2>
      <ul className="flex-start-col gap-6 w-full">
        {skill.value.map((lang, index) => {
          return (
            <li key={index} className="w-full flex-start-col gap-1">
              <div className="w-full flex-between gap-5 uppercase text-body">
                <h3 className="uppercase text-body tracking-[2]">
                  {lang.name}
                </h3>
                <p>{lang.persentage}%</p>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-4 relative">
                <span
                  className="h-2 inline-block absolute left-1 top-1 rounded-full bg-progress-bar"
                  style={{ width: `${lang.persentage - 2}%` }}
                ></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResumeCard;
