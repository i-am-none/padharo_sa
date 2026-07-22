import Link from "next/link";

type StoryCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function StoryCTA({
  title = "Experience the Story in Person",
  description = "Reserve your table and taste the heritage behind every dish.",
  primaryLabel = "Reserve Your Experience",
  primaryHref = "/reservation",
  secondaryLabel = "Discover the Menu",
  secondaryHref = "/menu",
}: StoryCTAProps) {
  return (
    <div className="story-cta">
      <div className="story-cta-container">
        <h2 className="story-cta-title">{title}</h2>
        <p className="story-cta-description">{description}</p>
        <div className="story-cta-actions">
          <Link href={primaryHref} className="story-cta-button story-cta-button-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="story-cta-button story-cta-button-secondary">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
