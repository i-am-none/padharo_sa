type HeroCopyProps = {
  text: string;
};

export function HeroCopy({ text }: HeroCopyProps) {
  return (
    <p className="text-hero-copy" data-hero-copy>
      {text}
    </p>
  );
}
