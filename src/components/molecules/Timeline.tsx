import type { TimelineType } from "data";
import { Accent } from "@/components/atoms";

type TimelineProps = {
  data: TimelineType[];
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <ul className="pl-4">
      {data.map(
        ({ id, title, description, datetime, location }: TimelineType) => (
          <li
            key={id}
            className="relative border-l border-neutral-300 pb-6 dark:border-neutral-800"
          >
            <div
              className={`absolute -left-[6.5px] mt-2.5 h-3 w-3 rounded-full ${
                datetime.end.toLowerCase() === "present"
                  ? "bg-primary ring-4 ring-primary ring-opacity-25"
                  : "bg-neutral-300"
              }`}
            ></div>
            <div className="ml-6 space-y-2">
              <h3>{title}</h3>
              <h4 className="inline-block">
                <Accent>{location}</Accent>
              </h4>
              <p>{description}</p>
              <time className="inline-block text-sm">{`${datetime.start} - ${datetime.end}`}</time>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default Timeline;
