import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { HeaderNames } from "./types";

type useNavBarScrollEffectPropsType = {
  name: HeaderNames;
  threshold: number;
};
export function useNavBarScrollEffect(name: HeaderNames, threshold: number) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { timeLastClicked, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeLastClicked > 1000) {
      setActiveSection(name);
    }
  }, [inView]);
  return ref;
}
