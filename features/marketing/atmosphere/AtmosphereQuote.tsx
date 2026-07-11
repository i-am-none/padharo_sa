type AtmosphereQuoteProps = {
  text: string;
};

export function AtmosphereQuote({ text }: AtmosphereQuoteProps) {
  return (
    <blockquote className="text-atmosphere-quote" data-atmosphere-quote>
      {text}
    </blockquote>
  );
}
