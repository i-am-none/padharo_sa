import { CuisineCopy } from "./CuisineCopy";
import { CuisineEyebrow } from "./CuisineEyebrow";
import { CuisineHeadline } from "./CuisineHeadline";
import { CuisineQuote } from "./CuisineQuote";
import { CuisineMedia } from "./CuisineMedia";
import type { CuisineContentModel } from "./cuisine.types";

type CuisineContentProps = {
  content: CuisineContentModel;
  headlineWords: string[];
};

export function CuisineContent({ content, headlineWords }: CuisineContentProps) {
  return (
    <div className="cuisine-content-grid">
      <div className="cuisine-content-column">
        <CuisineEyebrow eyebrow={content.eyebrow} />
        <CuisineHeadline headline={content.headline} headlineWords={headlineWords} />
        <CuisineCopy copy={content.copy} />
        <CuisineQuote quote={content.quote} />
      </div>
      {content.media && <CuisineMedia media={content.media} />}
    </div>
  );
}
