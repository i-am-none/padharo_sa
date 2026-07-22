export type ReservationCTAContentModel = {
  id: string;
  headline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};
