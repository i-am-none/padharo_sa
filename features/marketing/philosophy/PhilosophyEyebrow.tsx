type PhilosophyEyebrowProps = {
  children: string;
};

export function PhilosophyEyebrow({ children }: PhilosophyEyebrowProps) {
  return (
    <p className="philosophy-eyebrow" data-philosophy-eyebrow>
      {children}
    </p>
  );
}
