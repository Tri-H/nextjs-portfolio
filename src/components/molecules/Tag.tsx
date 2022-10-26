import * as React from "react";
import { Button } from "@/components/atoms";
import type { TagType } from "data";

type TagProps = {
  tags: TagType;
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
};

const Tag = ({ tags, selectedTag, setSelectedTag }: TagProps) => {
  const tagHandler = (tag: string) => {
    selectedTag === tag ? setSelectedTag("") : setSelectedTag(tag);
  };

  return (
    <div className="my-8 inline-flex flex-wrap gap-4">
      {tags.map((tag) => (
        <Button
          key={tag}
          className={`rounded-lg border dark:border-neutral-800 ${
            selectedTag === tag
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
          } text-xs`}
          onClick={() => tagHandler(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default Tag;
