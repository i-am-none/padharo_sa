import type { PhilosophyContentModel } from "./philosophy.types";
import { PhilosophyClient } from "./PhilosophyClient";

type PhilosophyProps = {
  content: PhilosophyContentModel;
};

export function Philosophy({ content }: PhilosophyProps) {
  return <PhilosophyClient content={content} />;
}
