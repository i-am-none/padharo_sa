export type ContactCard = {
  id: string;
  title: string;
  value: string;
  cta: {
    label: string;
    href: string;
  };
  icon: string;
};

export type ContactOverviewContentModel = {
  id: string;
  headline: string;
  cards: ContactCard[];
};
