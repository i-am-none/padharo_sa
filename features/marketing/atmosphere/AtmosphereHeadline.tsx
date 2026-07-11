type AtmosphereHeadlineProps = {
  text: string;
};

export function AtmosphereHeadline({ text }: AtmosphereHeadlineProps) {
  const words = text.split(" ");

  return (
    <h2 className="text-atmosphere-headline">
      {words.map((word, index) => (
        <span key={index} className="atmosphere-word" data-atmosphere-word>
          {word}
        </span>
      ))}
    </h2>
  );
}
