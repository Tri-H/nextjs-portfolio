import type { TimelineType } from "data";
import { Accent } from "../atoms";

type TimelineProps = {
  timeline: TimelineType[];
};

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <ul className="pl-4">
      {timeline.map(
        ({ id, title, description, datetime, location }: TimelineType) => (
          <li
            key={id}
            className="relative border-l border-zinc-300 pb-6 dark:border-zinc-800"
          >
            <div
              className={`absolute -left-[6.5px] mt-1.5 h-3 w-3 rounded-full ${
                datetime.end.toLowerCase() === "present"
                  ? "bg-primary ring-4 ring-primary ring-opacity-25"
                  : "bg-zinc-300 dark:bg-zinc-800"
              }`}
            ></div>
            <div className="ml-6 space-y-2">
              <h3>{title}</h3>
              <h4 className="inline-block">
                <Accent>{location}</Accent>
              </h4>
              <p>{description}</p>
              <time>{`${datetime.start} - ${datetime.end}`}</time>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
