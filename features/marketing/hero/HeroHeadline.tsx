type HeroHeadlineProps = {
  text: string;
  words: string[];
};

export function HeroHeadline({ text, words }: HeroHeadlineProps) {
  return (
    <h1 aria-label={text} className="text-hero-headline">
      {words.map((word, index) => (
        <span className="hero-word" data-hero-word key={`${word}-${index}`}>
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h1>
  );
}
