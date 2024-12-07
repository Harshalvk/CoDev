"use client";

import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";

const Tags = ({ tags }: { tags: string }) => {
  const router = useRouter();
  if (!tags) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tags
          .split(/,\s*|\s+/)
          .filter((tag) => tag.trim() !== "")
          .map((tag, index) => (
            <Badge
              onClick={() => router.push(`/?search=${tag}`)}
              variant={"secondary"}
              className="border dark:border-white/10 border-black/10 capitalize cursor-pointer"
              key={index}
            >
              {tag}
            </Badge>
          ))}
      </div>
    </div>
  );
};

export default Tags;
