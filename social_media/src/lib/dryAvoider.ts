import { ProjectContext } from "@/app/page";
import { RefContextType } from "@/app/page";
import { useContext } from "react";

export const scrollToRef = ({ projectRef }: RefContextType) => {
  if (projectRef.current) {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const useProjectRefContext = (): RefContextType => {
  const projectRef = useContext(ProjectContext);
  if (!projectRef) {
    throw new Error("useRefContext must be used within a RefProvider");
  }
  return projectRef;
};
