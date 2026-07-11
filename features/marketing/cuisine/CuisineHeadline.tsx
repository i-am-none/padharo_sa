type CuisineHeadlineProps = {
  headline: string;
  headlineWords: string[];
};

export function CuisineHeadline({ headline, headlineWords }: CuisineHeadlineProps) {
  return (
    <h2 className="cuisine-headline">
      {headlineWords.map((word, index) => (
        <span key={index} className="cuisine-headline-word" data-cuisine-word>
          {word}
        </span>
      ))}
    </h2>
  );
}
