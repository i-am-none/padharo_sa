type AtmosphereEyebrowProps = {
  text: string;
};

export function AtmosphereEyebrow({ text }: AtmosphereEyebrowProps) {
  return (
    <p className="text-atmosphere-eyebrow" data-atmosphere-eyebrow>
      {text}
    </p>
  );
}
