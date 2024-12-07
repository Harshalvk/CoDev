"use client";

import { useRouter } from "next/navigation";
import { Badge, badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";

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
            <button
              onClick={() => router.push(`/?search=${tag}`)}
              key={index}
              className={cn(
                badgeVariants(),
                "dark:bg-neutral-800  dark:text-white focus:outline-none"
              )}
            >
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Tags;
