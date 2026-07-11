import type { PhilosophyContentModel } from "./philosophy.types";
import { PhilosophyBody } from "./PhilosophyBody";
import { PhilosophyEyebrow } from "./PhilosophyEyebrow";
import { PhilosophyHeadline } from "./PhilosophyHeadline";
import { PhilosophyPrinciples } from "./PhilosophyPrinciples";
import { PhilosophyQuote } from "./PhilosophyQuote";

type PhilosophyContentProps = {
  content: PhilosophyContentModel;
};

export function PhilosophyContent({ content }: PhilosophyContentProps) {
  return (
    <>
      <PhilosophyEyebrow>{content.eyebrow}</PhilosophyEyebrow>
      <PhilosophyHeadline headline={content.headline} />
      <PhilosophyBody paragraphs={content.body} />
      {content.principles && <PhilosophyPrinciples principles={content.principles} />}
      {content.quote && <PhilosophyQuote>{content.quote}</PhilosophyQuote>}
    </>
  );
}
