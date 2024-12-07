import { Badge } from "./ui/badge";

const LanguageTag = ({ languages }: { languages: string }) => {
  if (!languages) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {languages
          .split(/,\s*|\s+/)
          .filter((lang) => lang.trim() !== "")
          .map((lang, index) => (
            <Badge
              variant={"secondary"}
              className="border dark:border-white/10 border-black/10"
              key={index}
            >
              {lang}
            </Badge>
          ))}
      </div>
    </div>
  );
};

export default LanguageTag;
