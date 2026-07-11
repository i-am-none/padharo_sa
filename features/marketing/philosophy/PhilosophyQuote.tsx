type PhilosophyQuoteProps = {
  children: string;
};

export function PhilosophyQuote({ children }: PhilosophyQuoteProps) {
  return (
    <blockquote className="philosophy-quote" data-philosophy-quote>
      <p className="philosophy-quote-text">{children}</p>
    </blockquote>
  );
}
