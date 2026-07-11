type PhilosophyHeadlineProps = {
  headline: string;
};

export function PhilosophyHeadline({ headline }: PhilosophyHeadlineProps) {
  return (
    <h2 className="philosophy-headline">
      {headline}
    </h2>
  );
}
