import { TimelineItem } from '@/components/shared/TimelineItem';
import type { MilestoneItem } from '@/types';

interface TimelineItemInterface {
  title: string;
  milestones: MilestoneItem[];
}

export function TimelineSection({
  timelines,
}: {
  timelines: TimelineItemInterface[];
}) {
  return (
    <div className="flex flex-col gap-4 pt-16 text-black md:flex-row">
      {timelines?.map((timeline) => {
        const { title, milestones } = timeline;
        return (
          <div className="max-w-[80%] md:max-w-[50%]" key={title}>
            <div className="pb-5 font-sans text-xl font-bold">{title}</div>

            {milestones?.map((experience, index) => (
              <div key={experience.title}>
                <TimelineItem
                  milestone={experience}
                  isLast={milestones.length - 1 === index}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
