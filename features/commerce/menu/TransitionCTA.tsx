import { TransitionContent } from "./menu.types";
import { TransitionCTAClient } from "./TransitionCTAClient";

interface TransitionCTAProps {
  content: TransitionContent;
}

export function TransitionCTA({ content }: TransitionCTAProps) {
  return <TransitionCTAClient content={content} />;
}
