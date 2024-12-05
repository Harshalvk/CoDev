import { Badge } from "./ui/badge";

const LanguageTag = ({ language }: { language: string }) => {
  return <Badge variant={"secondary"} className="border dark:border-white/10 border-black/10">{language}</Badge>;
};

export default LanguageTag;
