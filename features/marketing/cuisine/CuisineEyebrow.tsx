type CuisineEyebrowProps = {
  eyebrow: string;
};

export function CuisineEyebrow({ eyebrow }: CuisineEyebrowProps) {
  return (
    <p className="cuisine-eyebrow" data-cuisine-eyebrow>
      {eyebrow}
    </p>
  );
}
