type PhilosophyBodyProps = {
  paragraphs: string[];
};

export function PhilosophyBody({ paragraphs }: PhilosophyBodyProps) {
  return (
    <div className="philosophy-body" data-philosophy-body>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="philosophy-paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
