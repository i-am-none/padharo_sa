export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQContentModel = {
  id: string;
  headline: string;
  items: FAQItem[];
};
