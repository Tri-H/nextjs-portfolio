import { Button } from "../atoms";
import type { TagType } from "data";
import { FC } from "react";

type TagProps = {
  tags: TagType;
  selectedTag?: string;
  setSelectedTag: (i: string) => void;
};

const Tag: FC<TagProps> = ({ tags, selectedTag, setSelectedTag }) => {
  function handleTagClick(tag: string) {
    selectedTag === tag ? setSelectedTag("") : setSelectedTag(tag);
  }

  return (
    <div className="my-8 inline-flex flex-wrap gap-4">
      {tags.map((tag) => (
        <Button
          key={tag}
          className={`rounded-lg border dark:border-zinc-900 ${
            selectedTag === tag
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
          } text-xs`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default Tag;
