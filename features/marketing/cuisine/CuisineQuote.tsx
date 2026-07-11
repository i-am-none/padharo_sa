type CuisineQuoteProps = {
  quote?: string;
};

export function CuisineQuote({ quote }: CuisineQuoteProps) {
  if (!quote) return null;

  return (
    <blockquote className="cuisine-quote" data-cuisine-quote>
      <p className="cuisine-quote-text">{quote}</p>
    </blockquote>
  );
}
